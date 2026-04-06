export type createPageArgs = {
	name: string
	type: string
	alias: string
	siteId: number
	parentId: number | null
	contentId: number | null
	title?: string
	description?: string
}

export type getPagesByParentIdArgs = {
	parentId: number | null
}

export type updatePageArgs = {
	id: number
	name: string
	type: string
	contentId: number | null
	title?: string
	description?: string
}

export type updatePageAliasArgs = {
	id: number
	siteId: number
	parentId: number | null
	alias: string
}

export type createPageContentArgs = {
	pageId: number
	content: string
}

export type upatePageContentArgs = {
	id: number
	content: string
}
