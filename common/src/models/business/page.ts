import { navigationMenuEnum } from './context'

export interface pageContext {
	id: string
	title: string
	description: string
	uri: string
	alias: string
	name: string
	type: string
	parentId: string
	children: string[]
}

export interface iPage {
	id: string
	title: string
	description: string
	uri: string
	alias: string
	name: string
	navigationNames: navigationNames
	type: pageTypeEnum
	parent: iPage | null
	children: iPage[]
}

export type navigationNames = Record<navigationMenuEnum | placeEnum, string>

enum placeEnum {
	breadcrumb = 'breadcrumb',
}

export function isNavigationNames(key: string): key is navigationMenuEnum | placeEnum {
	return key in navigationMenuEnum || key in placeEnum
}

export const navigationNamesEnum = { ...navigationMenuEnum, ...placeEnum } as const

export enum pageTypeEnum {
	main,
	common,
	action,
	tariff,
	news,
	article,
	service,
	p404,
}

export const isPageTypeEnum = (value: string): value is keyof typeof pageTypeEnum => value in pageTypeEnum
