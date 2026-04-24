import ApiBase from '../api-base/api-base'
import { IFilesService, tFileLoader } from './i-files-service'

class FilesService extends ApiBase implements IFilesService {
	_get
	_load

	constructor() {
		super()
		this._domain += 'fileLoaders'
		this._get = this._createSimpleFetch<tFileLoader[]>({ method: 'GET' })
		this._load = this._createFetchWithFile<any[]>({ method: 'POST', headers: {} })
	}

	get = () => this._get()
	load = (data: FormData) => this._load(data)
}

export default new FilesService() as IFilesService
