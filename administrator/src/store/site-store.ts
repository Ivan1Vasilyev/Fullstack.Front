import { create, StoreApi, UseBoundStore } from 'zustand'
import { tSite } from '@frontend/common'

const siteStores = new Map<number, UseBoundStore<StoreApi<ISiteStore>>>()

interface ISiteStore {
	sites: tSite[]
	setSites: (sites: tSite[]) => void
	update: (site: tSite) => void
	add: (site: tSite) => void
}

export function getSiteStore(providerId: number) {
	if (!siteStores.has(providerId)) {
		const store = create<ISiteStore>(set => ({
			sites: [],
			setSites: sites => set({ sites }),
			add: site => set(state => ({ sites: [...state.sites, site] })),
			update: site => set(state => ({ sites: state.sites.map(s => (s.id === site.id ? site : s)) }))
		}))

		siteStores.set(providerId, store)
	}

	return siteStores.get(providerId)!
}
