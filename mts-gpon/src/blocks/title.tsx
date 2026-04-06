import { sanitizeHtml } from '@frontend/common'
import { IHeaderBlock, IBlockProps } from '@frontend/common'

const Title = async ({ data }: IBlockProps) => {
	const titleData = (data as IHeaderBlock) || ({} as IHeaderBlock)

	const Tag = titleData.tag || 'h2'
	const title = await sanitizeHtml(titleData.title)
	const text = await sanitizeHtml(titleData.text)

	return (
		<>
			<Tag dangerouslySetInnerHTML={{ __html: title }} />
			{text && <p>{text}</p>}
		</>
	)
}

export default Title
