import { iPage, BlockNamesEnum, cityModel, mockPage, IBlock, IContentItem } from '@frontend/common'
import RenderBlock from './render-block'

const RenderBlocks = ({ page, city }: { page: mockPage; city: cityModel }) => {
	const content = (page.content ? JSON.parse(page.content) : []) as IContentItem[]

	return (
		<>
			{content.map((i, index) => (
				<RenderBlock key={`${i.blockName}${index}`} data={i.data} blockName={i.blockName} page={page} city={city} />
			))}
		</>
	)
}

export default RenderBlocks
