import { IPageContext, tSite } from '@frontend/common'
import { createModel, ReadonlySignal, Signal, signal } from '@preact/signals-react'
import { IPageModel, PageModel } from '../pages/page-model'

export interface ISiteModel {
	model: Signal<tSite>
	mainPage: ReadonlySignal<IPageModel | null>
	setMainPage: (page: IPageContext) => void
}

export const SiteModel = createModel<ISiteModel, [tSite]>((site: tSite) => {
	const model = signal<tSite>(site)
	const mainPage = signal<IPageModel | null>(null)

	const setMainPage = (page: IPageContext) => {
		mainPage.value = new PageModel(page)
	}

	return { model, mainPage, setMainPage }
})
