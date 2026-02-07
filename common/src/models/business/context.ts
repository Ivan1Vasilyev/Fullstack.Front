import { cityModel } from './city'
import { iPage } from './page'

export interface IContext {
	city: cityModel
	navigationMenu: navigationMenu
	navigationLink: navigationLink
}

export enum navigationMenuEnum {
	header = 'header',
	business = 'business',
	footerHome = 'footerHome',
	footerInfo = 'footerInfo',
	footerInteresting = 'footerInteresting',
	footerBusiness = 'footerBusiness',
	footerPolicy = 'footerPolicy',
	actions = 'actions',
	lastNews = 'lastNews',
	lastArticles = 'lastArticles',
}

export type navigationMenu = Record<navigationMenuEnum, iPage[]>

export const enum navigationLinkEnum {
	tariffs = 'tariffs',
	internetTvMob = 'internetTvMob',
	internetTv = 'internetTv',
	internet = 'internet',
	cookes = 'cookes',
	policy = 'policy',
	agreement = 'agreement',
	newsList = 'newsList',
	actionList = 'actionList',
}

export type navigationLink = Record<navigationLinkEnum, iPage>
