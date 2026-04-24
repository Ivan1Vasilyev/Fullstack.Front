import { tProvider } from '@frontend/common'
import ApiBase from '../api-base/api-base'
import { IProviderService } from './i-providers-service'
import { providerCreateArgs, providerUpdateArgs } from './providers-arguments'

class ProvidersService extends ApiBase implements IProviderService {
	_getAll
	_update
	_create

	constructor() {
		super()
		this._domain += 'providers'
		this._getAll = this._createSimpleFetch<tProvider[]>({ method: 'GET' })
		this._update = this._createFetchWithBody<tProvider>({ method: 'PATCH' })
		this._create = this._createFetchWithBody<tProvider>({ method: 'POST' })
	}

	getAll = () => this._getAll()
	update = (args: providerUpdateArgs) => this._update(args)
	create = (args: providerCreateArgs) => this._create(args)
}

export default new ProvidersService() as IProviderService
