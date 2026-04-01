// import { tSite } from '@frontend/common'
// import { createModel, ReadonlySignal, signal } from '@preact/signals-react'

// export interface ISitesStore {
// 	items: ReadonlySignal<tSite[]>
// 	set: (sites: tSite[]) => void
// 	update: (site: tSite) => void
// 	add: (site: tSite) => void
// }

// export const SitesModel = createModel<ISitesStore>(() => {
// 	const collection = signal([] as tSite[])

// 	return {
// 		items: collection,
// 		set(sites: tSite[]) {
// 			collection.value = sites
// 		},

// 		update(site: tSite) {
// 			collection.value = collection.value.map(i => (i.id === site.id ? site : i))
// 		},

// 		add(site: tSite) {
// 			collection.value = [...collection.value, site]
// 		}
// 	}
// })
