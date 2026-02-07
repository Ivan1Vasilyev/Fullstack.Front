import { tProvider } from '@frontend/common'
import { tSite } from '@frontend/common'

export interface IApiService {
	getProviders: () => Promise<tProvider[]>
	getSites: (id: number) => Promise<tSite[]>
}
