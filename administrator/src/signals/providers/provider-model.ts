import { createModel, ReadonlySignal, Signal, signal } from '@preact/signals-react'
import { tProvider } from '../../../../common/dist/models/business/provider'
import { ISiteModel, SiteModel } from '../sites/site-model'
import { tSite } from '@frontend/common'

export interface IProviderModel {
	model: Signal<tProvider>
	sites: ReadonlySignal<ISiteModel[]>
	setSites: (siteList: tSite[]) => void
	addSite: (site: tSite) => void
}

export const ProviderModel = createModel<IProviderModel, [tProvider]>((provider: tProvider) => {
	const model = signal<tProvider>(provider)
	const sites = signal<ISiteModel[]>([])

	const setSites = (siteList: tSite[]) => {
		sites.value = siteList.map(i => new SiteModel(i))
	}

	const addSite = (site: tSite) => {
		sites.value = [...sites.value, new SiteModel(site)]
	}

	return {
		model,
		sites,
		setSites,
		addSite
	}
})
