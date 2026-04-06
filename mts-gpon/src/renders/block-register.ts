import { IBlockProps, BlockNamesEnum } from '@frontend/common'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

const Block1 = dynamic<IBlockProps>(() => import('@/blocks/block-1'))
const Tariffs = dynamic<IBlockProps>(() => import('@/blocks/tariffs'))
const Title = dynamic<IBlockProps>(() => import('@/blocks/title'))
const OrderedTitle = dynamic<IBlockProps>(() => import('@/blocks/ordered-title'))
const MainBanner = dynamic<IBlockProps>(() => import('@/blocks/main-banner'))

export enum MtsBlockNamesEnum {
	orderedTitle = 'orderedTitle'
}
type BlockNames = BlockNamesEnum | MtsBlockNamesEnum

export const blocksRegistry: Record<BlockNames, ComponentType<IBlockProps>> = {
	[BlockNamesEnum.banner]: Block1,
	[BlockNamesEnum.tariffs]: Tariffs,
	[BlockNamesEnum.title]: Title,
	[MtsBlockNamesEnum.orderedTitle]: OrderedTitle,
	[BlockNamesEnum.mainBanner]: MainBanner
} as const
