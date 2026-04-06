import { IOrderable } from '../../view/orderable'
import { IBlockBase } from '../source/i-block-base'
import { IHeaderBlock } from './i-header-block'
import { IImageBlock } from './i-image-block'
import { ITariffBlock } from './i-tariffs-block'

export type IBlock = IHeaderBlock | IImageBlock | ITariffBlock | IOrderblock

export interface IOrderblock extends IBlockBase, IOrderable<IBlock> {}
