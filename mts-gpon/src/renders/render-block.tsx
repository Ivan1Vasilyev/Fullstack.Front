import { BlockProps, BlockNamesEnum } from '@frontend/common'
import { blocksRegistry } from './block-register'

interface RenderBlockProps extends BlockProps {
	blockName: BlockNamesEnum
}

const RenderBlock = ({ blockName, data, page }: RenderBlockProps) => {
	const Block = blocksRegistry[blockName]

	if (!Block) {
		console.error(`Block "${blockName}" not found in registry`)
		return <div>Ошибка: блок не найден</div>
	}

	return <Block data={data} page={page} />
}

export default RenderBlock
