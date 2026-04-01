type createFetchArgs = {
	key: string
	method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE'
	headers: HeadersInit
}

export default class ApiBase {
	_formHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' }
	_jsonHeaders = { 'Content-Type': 'application/json' }
	_domain = 'https://localhost:7271/api/'

	_responseHandler = async <T>(response: Response): Promise<T> => {
		if (response.ok) {
			return await response.json()
		} else {
			throw await response.json()
		}
	}
	_createFetchWithBody =
		<T>({ key, method, headers }: createFetchArgs) =>
		async (data: any): Promise<T> =>
			this._responseHandler<T>(
				await fetch(`${this._domain}${key}`, {
					method,
					headers,
					body: JSON.stringify(data),
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
}
