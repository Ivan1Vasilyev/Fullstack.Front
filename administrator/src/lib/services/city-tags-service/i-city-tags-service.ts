import { tCityTag } from '@frontend/common'

export interface ICityTagsService {
	getByProviderId: (id: number) => Promise<tCityTag[]>
}
