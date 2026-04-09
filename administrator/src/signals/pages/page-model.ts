import { IPageContext } from '@frontend/common'
import { createModel, ReadonlySignal, signal, Signal } from '@preact/signals-react'

export interface IPageModel {
	model: Signal<IPageContext>
	children: ReadonlySignal<IPageModel[]>
	setChildren: (pageList: IPageContext[]) => void
	addChildPage: (page: IPageContext) => void
}

export const PageModel = createModel<IPageModel, [IPageContext]>((page: IPageContext) => {
	const model = signal<IPageContext>(page)
	const children = signal<IPageModel[]>([])

	const setChildren = (pageList: IPageContext[]) => {
		children.value = pageList.map(i => new PageModel(i))
	}

	const addChildPage = (page: IPageContext) => {
		children.value = [...children.value, new PageModel(page)]
	}

	return {
		model,
		children,
		setChildren,
		addChildPage
	}
})
