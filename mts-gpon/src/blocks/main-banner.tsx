import { IBlockProps } from '@frontend/common'

const MainBanner = ({ data }: IBlockProps) => {
	const cssClass = data.cssClass

	return <div>Main Banner {cssClass}</div>
}

export default MainBanner
