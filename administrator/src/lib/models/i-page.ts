export interface IPage {
	id: number
	name: string
	type: string
	alias: string
	siteId: number
	parentId: number | null
	contentId: number | null
	title?: string
	description?: string
}
