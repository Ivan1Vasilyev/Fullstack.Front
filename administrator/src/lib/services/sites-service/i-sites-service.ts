import { tSite } from '@frontend/common'
import { createSiteArgs, updateSiteArgs } from './sites-arguments'

export interface ISitesService {
	getByProviderId: (providerId: number) => Promise<tSite[]>
	update: (args: updateSiteArgs) => Promise<tSite>
	create: (args: createSiteArgs) => Promise<tSite>
}
