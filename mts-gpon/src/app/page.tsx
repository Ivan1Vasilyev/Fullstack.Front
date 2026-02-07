import Header from '@/components/common/header/header'
import MainPage from '@/components/pages/main'
import RenderBlocks from '@/renders/render-blocks'
import { getPages } from '@frontend/common'
import { Metadata } from 'next'

export const revalidate = 3600 // ISR вместо полной статики

// export const generateMetadata = async (): Promise<Metadata> => {
// 	const pages = await getPages()

// 	const page = pages.find((i: any) => i.uri === '')
// 	return {
// 		title: page?.title,
// 		description: page?.description,
// 	}
// }

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<MainPage />
				<RenderBlocks />
			</main>
		</>
	)
}
