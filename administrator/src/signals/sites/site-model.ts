import { tSite } from '@frontend/common'
import { createModel, ReadonlySignal, Signal, signal } from '@preact/signals-react'

export interface ISiteModel {
	model: Signal<tSite>
}

export const SiteModel = createModel<ISiteModel, [tSite]>((site: tSite) => {
	const model = signal<tSite>(site)

	return { model }
})
