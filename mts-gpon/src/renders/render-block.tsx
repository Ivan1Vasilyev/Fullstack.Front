import { IBlockProps, BlockNamesEnum } from '@frontend/common'
import { blocksRegistry } from './block-register'

interface RenderBlockProps extends IBlockProps {
	blockName: BlockNamesEnum
}

const RenderBlock = ({ blockName, data, page, city }: RenderBlockProps) => {
	const Block = blocksRegistry[blockName]

	if (!Block) {
		console.error(`Block "${blockName}" not found in blocksRegistry`)
		return <div>Ошибка: блок не найден</div>
	}

	return <Block data={data} page={page} city={city} />
}

export default RenderBlock
