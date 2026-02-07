import { iPage, pageContext, pageTypeEnum, isNavigationNames, navigationNames, isPageTypeEnum } from '../../models/business/page'

import apiService from '../api/api-service'

export const getPages = async (): Promise<iPage[]> => {
	const pageContextList: pageContext[] = await apiService.getPages()

	return convertAndFillIPage(pageContextList)
}

const convertAndFillIPage = (pageContextList: pageContext[]): iPage[] => {
	const pagesMap = new Map<string, iPage>()

	const buffer = pageContextList.map(source => {
		const page = convertToIPage(source)
		pagesMap.set(page.id, page)
		return page
	})

	pageContextList.forEach(i => {
		const page = pagesMap.get(i.id)
		if (!page) return

		const parent = pagesMap.get(i.parentId)
		if (parent) {
			page.parent = parent
			parent.children.push(page)
		}
	})

	for (let i = 0; i < buffer.length; i++) {
		const page = buffer[i]
		let uri = page.alias
		let parent = page.parent
		while (parent) {
			uri = parent.uri + '/' + uri
			parent = parent.parent
		}
		page.uri = uri
	}

	return buffer
}

const convertToIPage = (source: pageContext): iPage => {
	const children = [] as iPage[]
	const parent = null
	const id = source.id
	const type = isPageTypeEnum(source.type) ? pageTypeEnum[source.type] : pageTypeEnum.common
	const uri = ''
	const title = source.title
	const description = source.description
	const name = source.name
	const alias = source.alias

	// const navigationNamesJson = JSON.parse(source.navigationNames)
	const navigationNames = {} as navigationNames

	// for (const item of navigationNamesJson) {
	// 	for (const key in item) {
	// 		const value = item[key]
	// 		if (isNavigationNames(key) && typeof value === 'string') {
	// 			navigationNames[key] = value
	// 		}
	// 	}
	// }

	return { id, title, description, uri, alias, name, type, navigationNames, children, parent }
}
