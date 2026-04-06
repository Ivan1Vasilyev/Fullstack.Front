export type mockPage = {
	alias: string
	name: string
	url: string
	content: string
}

export const pages = (): mockPage[] =>
	[
		{ alias: '', name: 'Главная', url: '' },
		{ alias: 'actions', name: 'Акции', url: 'actions' },
		{ alias: 'tariffs', name: 'Тарифы', url: 'tariffs' },
		{ alias: 'reel', name: 'Акция Риил+', url: 'actions/reel' },
		{ alias: 'dacha', name: 'Интернет на дачу', url: 'actions/dacha' }
	] as mockPage[]
