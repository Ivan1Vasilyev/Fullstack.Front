import { tProvider } from '@frontend/common'
import { tSite } from '../../../../common/src/models/business/site'
import { IApiService } from './i-api-service'

type createFetchArgs = {
	key: string
	method: 'POST' | 'GET' | 'PUTCH' | 'PUT' | 'DELETE'
	headers: HeadersInit
}

class ApiService implements IApiService {
	_formHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' }
	_jsonHeaders = { 'Content-Type': 'application/json' }
	_domain = 'https://localhost:7141/api/'

	_responseHandler = async <T>(response: Response): Promise<T> => (response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`))

	_createFetchWithBody =
		<T>({ key, method, headers }: createFetchArgs) =>
		async (data: any): Promise<T> =>
			this._responseHandler<T>(
				await fetch(`${this._domain}${key}`, {
					method,
					headers,
					body: new URLSearchParams(data).toString(),
				}),
			)

	_createSimpleFetch =
		<T>({ key, method, headers }: createFetchArgs) =>
		async (data?: string | number): Promise<T> =>
			this._responseHandler<T>(
				await fetch(`${this._domain}${key}${data || ''}`, {
					method,
					headers,
				}),
			)

	getSites = (providerId: number) => this._createSimpleFetch<tSite[]>({ key: `sites/`, method: 'GET', headers: this._jsonHeaders })(providerId)
	getProviders = () => this._createSimpleFetch<tProvider[]>({ key: `providers`, method: 'GET', headers: this._jsonHeaders })()
}

export default new ApiService() as IApiService
