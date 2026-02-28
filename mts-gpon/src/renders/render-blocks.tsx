import { IContentItem, iPage, BlockNamesEnum } from '@frontend/common'
import RenderBlock from './render-block'

const RenderBlocks = () => {
	const data = [
		{ position: 0, block: BlockNamesEnum.banner, data: {} as IContentItem, page: {} as iPage },
		{ position: 1, block: BlockNamesEnum.tariffs, data: {} as IContentItem, page: {} as iPage },
	]

	return (
		<>
			{data.map(i => (
				<RenderBlock key={i.position} data={i.data} blockName={i.block} page={i.page} />
			))}
		</>
	)
}

export default RenderBlocks
