import { tSite } from '@frontend/common'
import ApiBase from '../api-base/api-base'
import { ISitesService } from './i-sites-service'
import { createSiteArgs, updateSiteArgs } from './sites-arguments'

class SitesService extends ApiBase implements ISitesService {
	_getByProviderId
	_update
	_create

	constructor() {
		super()
		this._domain += 'sites'
		this._getByProviderId = this._createSimpleFetch<tSite[]>({ method: 'GET' })
		this._update = this._createFetchWithBody<tSite>({ method: 'PATCH' })
		this._create = this._createFetchWithBody<tSite>({ method: 'POST' })
	}

	getByProviderId = (providerId: number) => this._getByProviderId(providerId)
	update = (args: updateSiteArgs) => this._update(args)
	create = (args: createSiteArgs) => this._create(args)
}

export default new SitesService() as ISitesService
