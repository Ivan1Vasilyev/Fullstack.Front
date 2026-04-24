import { tCityTag } from '@frontend/common'
import ApiBase from '../api-base/api-base'
import { ICityTagsService } from './i-city-tags-service'

class CityTagsService extends ApiBase implements ICityTagsService {
	_getByProviderId

	constructor() {
		super()
		this._domain += 'cityTags'

		this._getByProviderId = this._createSimpleFetch<tCityTag[]>({ method: 'GET' })
	}

	getByProviderId = (id: number) => this._getByProviderId(id)
}

export default new CityTagsService() as ICityTagsService
