import { tProvider } from '@frontend/common'
import { create } from 'zustand'

interface IUseProvider {
	providers: tProvider[]
	update: (provider: tProvider) => void
	add: (provider: tProvider) => void
	setAll: (providers: tProvider[]) => void
}

export const useProvider = create<IUseProvider>(set => ({
	providers: [] as tProvider[],
	update: (provider: tProvider) => set(state => ({ providers: state.providers.map(i => (i.id === provider.id ? provider : i)) })),
	add: (provider: tProvider) => set(state => ({ providers: [...state.providers, provider] })),
	setAll: (providers: tProvider[]) => set({ providers })
}))
