import { IHeaderBlock, IBlockProps, IOrderable, Orderable } from '@frontend/common'

const OrderedTitle = ({ data, city }: IBlockProps) => {
	const titleData = data as IOrderable<IHeaderBlock>

	const { title, text, tag: Tag = 'h2' } = new Orderable(titleData.default, titleData.cities).get(city.domainCode)

	return (
		<>
			<Tag>{title}</Tag>
			{text && <p>{text}</p>}
		</>
	)
}

export default OrderedTitle
