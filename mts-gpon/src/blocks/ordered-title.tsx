import { IHeaderBlock, BlockProps } from '@frontend/common'

const OrderedTitle = ({ data }: BlockProps) => {
	const titleData = (data.blockData as IHeaderBlock) || ({} as IHeaderBlock)

	const Tag = titleData.tag || 'h2'
	const title = titleData.title

	return (
		<>
			<Tag>{title}</Tag>
			{titleData.text && <p>{titleData.text}</p>}
		</>
	)
}

export default OrderedTitle
