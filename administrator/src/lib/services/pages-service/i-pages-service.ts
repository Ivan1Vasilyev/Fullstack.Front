import { IPage } from '@/lib/models/i-page'
import { createPageArgs, updatePageArgs, updatePageAliasArgs, createPageContentArgs, upatePageContentArgs, getPagesByParentIdArgs } from './pages-arguments'

export interface IPagesService {
	getByParentId: (args: getPagesByParentIdArgs) => Promise<IPage[]>
	create: (args: createPageArgs) => Promise<IPage>
	update: (args: updatePageArgs) => Promise<IPage>
	updateAlias: (args: updatePageAliasArgs) => Promise<string>
	createContent: (args: createPageContentArgs) => Promise<string>
	updateContent: (args: upatePageContentArgs) => Promise<string>
	deleteContent: (id: number) => Promise<number>
}
