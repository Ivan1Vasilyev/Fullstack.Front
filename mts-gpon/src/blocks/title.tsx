import { sanitizeHtml } from '@frontend/common'
import { IHeaderBlock, BlockProps } from '@frontend/common'

const Title = async ({ data }: BlockProps) => {
	const titleData = (data.blockData as IHeaderBlock) || ({} as IHeaderBlock)

	const Tag = titleData.tag || 'h2'
	const title = await sanitizeHtml('Текст заголовка. <br/> вторая строка <script>alert("HACKERS!!!")</script>')

	return (
		<>
			<Tag dangerouslySetInnerHTML={{ __html: title }} />
			{titleData.text && <p>{titleData.text}</p>}
		</>
	)
}

export default Title
