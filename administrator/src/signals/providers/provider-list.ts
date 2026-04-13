import { tProvider } from '@frontend/common'
import { createModel, ReadonlySignal, signal } from '@preact/signals-react'
import { IProviderModel, ProviderModel } from './provider-model'

interface IProviderListModel {
	items: ReadonlySignal<IProviderModel[]>
	set: (providers: tProvider[]) => void
	// update: (provider: tProvider) => void
	add: (provider: tProvider) => void
}

const ProviderListModel = createModel<IProviderListModel>(() => {
	const items = signal<IProviderModel[]>([] as IProviderModel[])

	return {
		items,
		set(providers: tProvider[]) {
			items.value = providers.map(i => new ProviderModel(i))
		},

		// update(provider: tProvider) {
		// 	items.value = items.value.map(i => (i.model.value.id === provider.id ? new ProviderModel(provider) : i))
		// },

		add(provider: tProvider) {
			items.value = [...items.value, new ProviderModel(provider)]
		}
	}
})

export const providerList = new ProviderListModel()
