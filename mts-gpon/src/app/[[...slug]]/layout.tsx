import { cityModel, pages } from '@frontend/common'
import '../../styles/globals.scss'
import Header from '@/components/common/header/header'
import { ResolvingMetadata, Metadata } from 'next'

const cities = {
	moskva: { cityName: 'Москва', frontCode: '', domainCode: 'moskva', phoneLink: '84994904580', phoneLabel: '+7 (499) 490-45-80' } as cityModel,
	balashixa: { cityName: 'Балашиха', frontCode: '/balashixa', domainCode: 'balashixa', phoneLink: '84994904580', phoneLabel: '+7 (499) 490-45-80' } as cityModel,
	'sankt-peterburg': {
		cityName: 'Санкт-Петербург',
		frontCode: '/sankt-peterburg',
		domainCode: 'sankt-peterburg',
		phoneLink: '88005553535',
		phoneLabel: '8 (800) 555-35-35'
	} as cityModel
} as Record<string, cityModel>

export async function generateStaticParams() {
	return pages().map(i => ({ slug: i.url.split('/').filter(Boolean) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
	const { slug } = await params

	const mockPages = pages()
	const firstSlug = slug?.length ? slug[0] : ''
	const isCity = firstSlug in cities

	const currentCity = cities[firstSlug] || cities.moskva
	const url = slug?.length ? slug.slice(isCity ? 1 : 0).join('/') : currentCity.frontCode

	const currentPage = mockPages.find(i => i.url === url)

	return {
		title: `${currentPage?.name} - ${currentCity.cityName}`,
		description: `Описание. ${currentPage?.name} - ${currentCity.cityName}`
	}
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ slug: string[] }>
}>) {
	const { slug = [] } = await params

	const firstSlug = slug[0] as string

	const currentCity = cities[firstSlug] || cities.moskva

	return (
		<html lang='en'>
			<body>
				<Header city={currentCity.domainCode} />
				{children}
			</body>
		</html>
	)
}
