import Link from 'next/link'
import { cityContext } from '@frontend/common'
import { getCities, getCity } from '@frontend/common'
import { PROVIDER_ID } from '@/utils/constants'

export async function generateStaticParams() {
	const data: cityContext[] = await getCities(PROVIDER_ID)

	return data.map(i => ({ city: i.domainCode }))
}

// export async function generateMetadata(): Promise<Metadata> {
// 	const headersData = await headers()
// 	console.log(headersData)
// 	return await getPageMetaData(headersData)
// }

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
	const { city } = await params

	return (
		<div>
			<div>My Post: {city}</div>
			<Content city={city} />
			<Link href={`${city}/tariffs`}>Тарифы</Link>
		</div>
	)
}

async function Content({ city }: { city: string }) {
	const cityData = await getCity(city)

	return (
		cityData && (
			<article>
				<h2>{cityData.cityName}</h2>
				<p>{cityData.phoneLabel}</p>
			</article>
		)
	)
}
