import { IBlockProps, BlockNamesEnum, ITariffBlock } from '@frontend/common'
import RenderBlock from '@/renders/render-block'

const Tariffs = ({ data, page, city }: IBlockProps) => {
	const tariffsData = data as ITariffBlock

	return (
		<div>
			<RenderBlock blockName={BlockNamesEnum.title} data={data} page={page} city={city} />
			{tariffsData.tariffs.map((i, idx) => (
				<div key={idx}>{i.title}</div>
			))}
		</div>
	)
}

export default Tariffs
