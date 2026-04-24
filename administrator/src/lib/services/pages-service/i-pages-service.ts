import { IPageContext } from '@frontend/common'
import { createPageFormArgs, updatePageArgs, updatePageUrlArgs, getPagesByParentIdArgs } from './pages-arguments'

export interface IPagesService {
	getByParentId: (args: getPagesByParentIdArgs) => Promise<IPageContext[]>
	getMainPage: (siteId: number) => Promise<IPageContext | undefined>
	create: (args: createPageFormArgs) => Promise<IPageContext>
	update: (args: updatePageArgs) => Promise<IPageContext>
	updateUrl: (args: updatePageUrlArgs) => Promise<string>
}
