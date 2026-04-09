import { IOrderable } from '../view/orderable'
import { navigationMenuEnum } from './context'

// export interface pageContext {
// 	id: string
// 	title: string
// 	description: string
// 	uri: string
// 	alias: string
// 	name: string
// 	type: string
// 	parentId: string
// 	children: string[]
// }

export interface IPageContext {
	id: number
	name: string
	type: pageTypeEnum
	url: string
	siteId: number
	parentId: number | null
	content?: string
	meta?: string
}

export enum pageTypeEnum {
	common = 'common',
	standart = 'standart'
}

export interface iPage {
	id: string
	meta: IOrderable<IMetaItem>
	uri: string
	alias: string
	name: string
	navigationNames: navigationNames
	type: pageTypeEnum
	parent: iPage | null
	children: iPage[]
	content: string
}

export type navigationNames = Record<navigationMenuEnum | placeEnum, string>

enum placeEnum {
	breadcrumb = 'breadcrumb'
}

export function isNavigationNames(key: string): key is navigationMenuEnum | placeEnum {
	return key in navigationMenuEnum || key in placeEnum
}

export const navigationNamesEnum = { ...navigationMenuEnum, ...placeEnum } as const

export interface IMetaItem {
	title: string
	description: string
}

// export const isPageTypeEnum = (value: string): value is keyof typeof pageTypeEnum => value in pageTypeEnum
