import TariffsPage from '@/components/pages/tariffs'
import { PROVIDER_ID } from '@/utils/constants'
import { getCities } from '@frontend/common'
import { cityContext } from '@frontend/common'

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

	return <TariffsPage city={city} />
}
