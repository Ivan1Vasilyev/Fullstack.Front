export default class ApiFactory {
	_postHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' }
	_fetch: Function

	constructor(fetch: Function) {
		this._fetch = fetch
	}

	_createFetchWithBody = (key: string, method: ApiMethod, headers: HeadersInit) => async (data: any) =>
		await this._fetch(key, {
			method,
			headers,
			body: new URLSearchParams(data).toString(),
		})

	_createSimpleFetch = (key: string, method: ApiMethod, headers: HeadersInit) => async (data: string) =>
		await this._fetch(`${key}${data}`, {
			method,
			headers,
		})
}

type ApiMethod = 'POST' | 'GET' | 'PUTCH' | 'PUT' | 'DELETE'
