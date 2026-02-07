import { cityContext } from '../../models/business/city'
import { pageContext } from '../../models/business/page'

const PORT = '7141'
const HOST = 'localhost'

class ApiService {
	private _url: string

	constructor(port: string, host: string) {
		this._url = `https://${host}:${port}/api/`
	}

	public getCities = async (providerId: number): Promise<cityContext[]> => await fetch(`${this._url}cities/${providerId}`).then(r => r.json())
	public getPages = async (): Promise<pageContext[]> => await fetch(`${this._url}pages`).then(r => r.json())
}

export default new ApiService(PORT, HOST)
