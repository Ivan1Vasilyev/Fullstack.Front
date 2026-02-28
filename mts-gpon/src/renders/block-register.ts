import { BlockProps, BlockNamesEnum } from '@frontend/common'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

const Block1 = dynamic<BlockProps>(() => import('@/blocks/block-1'))
const Tariffs = dynamic<BlockProps>(() => import('@/blocks/tariffs'))
const Title = dynamic<BlockProps>(() => import('@/blocks/title'))
const OrderedTitle = dynamic<BlockProps>(() => import('@/blocks/ordered-title'))
const MainBanner = dynamic<BlockProps>(() => import('@/blocks/main-banner'))

enum MtsBlockNamesEnum {
	orderedTitle = 'orderedTitle',
}
type BlockNames = BlockNamesEnum | MtsBlockNamesEnum

export const blocksRegistry: Record<BlockNames, ComponentType<BlockProps>> = {
	[BlockNamesEnum.banner]: Block1,
	[BlockNamesEnum.tariffs]: Tariffs,
	[BlockNamesEnum.title]: Title,
	[MtsBlockNamesEnum.orderedTitle]: OrderedTitle,
	[BlockNamesEnum.mainBanner]: MainBanner,
} as const
