import { getCity } from '@frontend/common'

const TariffsPage = async ({ city }: { city: string }) => {
	const cityData = await getCity(city)
	return (
		<>
			<h1>Тарифы</h1>
			{cityData && <div>{cityData.providerId}</div>}
		</>
	)
}

export default TariffsPage
