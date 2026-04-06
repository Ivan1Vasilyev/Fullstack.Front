import { cityModel } from '../business/city'
import { iPage } from '../business/page'
import { mockPage } from '../view/mock-pages'
import { IBlock } from './blocks/i-block'

export interface IBlockProps {
	page: mockPage
	city: cityModel
	data: IBlock
}

export enum BlockNamesEnum {
	banner = 'banner',
	tariffs = 'tariffs',
	title = 'title',
	mainBanner = 'main-banner'
}

export interface IContentItem {
	blockName: BlockNamesEnum
	data: IBlock
}
