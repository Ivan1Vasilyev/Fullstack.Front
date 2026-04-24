import { phoneDb } from '@frontend/common'
import ApiBase from '../api-base/api-base'
import { IPhonesService } from './i-phones-service'
import { createPhoneArgs, updatePhoneArgs } from './phones-args'

class PhonesService extends ApiBase implements IPhonesService {
	_getBySiteId
	_create
	_update
	_delete

	constructor() {
		super()
		this._domain += 'phones'

		this._getBySiteId = this._createSimpleFetch<phoneDb[]>({ method: 'GET' })
		this._create = this._createFetchWithBody<phoneDb>({ method: 'POST' })
		this._update = this._createFetchWithBody<phoneDb>({ method: 'PATCH' })
		this._delete = this._createSimpleFetch<boolean>({ method: 'DELETE' })
	}

	getBysiteId = (id: number) => this._getBySiteId(id)
	create = (args: createPhoneArgs) => this._create(args)
	update = (args: updatePhoneArgs) => this._update(args)
	delete = (id: number) => this._delete(id)
}

export default new PhonesService() as IPhonesService
