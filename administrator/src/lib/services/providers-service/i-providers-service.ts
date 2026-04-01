import { tProvider } from '@frontend/common'
import { providerCreateArgs, providerUpdateArgs } from './providers-arguments'

export interface IProviderService {
	getAll: () => Promise<tProvider[]>
	update: (args: providerUpdateArgs) => Promise<tProvider>
	create: (args: providerCreateArgs) => Promise<tProvider>
}
