import RenderBlock from './render-block'

const RenderBlocks = () => {
	const data = [
		{ key: 0, block: 'block-1', name: 'Главная' },
		{ key: 1, block: 'block-2', name: 'Тарифы' },
	]
	return (
		<>
			{data.map(i => (
				<RenderBlock key={i.key} page={i.name} block={i.block} />
			))}
		</>
	)
}

export default RenderBlocks
