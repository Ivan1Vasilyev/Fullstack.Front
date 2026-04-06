import { IBlockBase } from './i-block-base'

export interface IImage extends IBlockBase {
	url: string
	urlMob?: string
	alt?: string
}
