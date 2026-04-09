export type createPageArgs = {
	name: string
	type: string
	url: string
	siteId: number
	parentId: number | null
	content?: string
	meta?: string
}

export type createPageFormArgs = {
	name: string
	type: string
	url: string
	siteId: number
	parentId: number | null
	title?: string
	description?: string
	content?: string
}

export type getPagesByParentIdArgs = {
	siteId: number
	parentId: number | null
}

export type updatePageArgs = {
	id: number
	name: string
	type: string
	content?: string
	meta?: string
}

export type updatePageUrlArgs = {
	id: number
	siteId: number
	parentId: number | null
	alias: string
}
