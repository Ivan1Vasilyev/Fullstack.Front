import { cityModel } from '../../models/business/city'
import apiService from '../api/api-service'

export const getCities = async (providerId: number): Promise<cityModel[]> => {
	const fetchedCities = await apiService.getCities(providerId)
	return fetchedCities.map(i => ({ frontCode: i.domainCode == 'moskva' ? '/' : `/${i.domainCode}`, phoneLabel: '+7 (499) 455-42-80', phoneLink: '84994554280', ...i }))
}

export const getCity = async (domainCode?: string): Promise<cityModel | undefined> => {
	const cities = await getCities(1)
	return cities.find(i => i.domainCode === (domainCode ?? 'moskva'))
}
