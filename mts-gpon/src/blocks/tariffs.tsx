import { BlockProps, BlockNamesEnum } from '@frontend/common'
import RenderBlock from '@/renders/render-block'

const Tariffs = ({ data, page }: BlockProps) => {
	return (
		<div>
			<RenderBlock blockName={BlockNamesEnum.title} data={data} page={page} />
			Тарифы
		</div>
	)
}

export default Tariffs
