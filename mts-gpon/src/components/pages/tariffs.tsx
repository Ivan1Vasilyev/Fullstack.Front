import { getCity } from '@frontend/common'

const TariffsPage = async ({ city }: { city: string }) => {
	const cities = (code?: string) => {
		switch (code) {
			case 'balashixa':
				return { cityName: 'Балашиха', frontCode: '/balashixa' }
			case 'sankt-peterburg':
				return { cityName: 'Санкт-Петербург', frontCode: '/sankt-peterburg' }
			default:
				return { cityName: 'Москва', forntCode: '' }
		}
	}
	// const cityData = await getCity(city)
	const cityData = cities(city)
	return (
		<>
			<h1>Тарифы</h1>
			{cityData && <div>{cityData.cityName}</div>}
		</>
	)
}

export default TariffsPage
