import { iPage } from '../business/page'
import { IBlock } from './blocks/i-block'

export interface IContentItem {
	position: number
	blockName: string
	blockData: IBlock
}

export interface IContent {
	content: IContentItem[]
}
export type BlockProps = {
	page: iPage
	data: IContentItem
}

export enum BlockNamesEnum {
	banner = 'banner',
	tariffs = 'tariffs',
	title = 'title',
	mainBanner = 'main-banner',
}
