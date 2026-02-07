import { lazy } from 'react'

const RenderBlock = ({ block, page }: { block: string; page: any }) => {
	console.log(block)
	const Block = lazy(() =>
		import(`@/components/${block}`).catch(() => ({
			default: () => <div>Ошибка</div>,
		})),
	)

	return <Block page={page} />
}

export default RenderBlock
