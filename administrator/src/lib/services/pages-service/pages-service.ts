import { IPageContext } from '@frontend/common'
import ApiBase from '../api-base/api-base'
import { IPagesService } from './i-pages-service'
import { createPageArgs, createPageFormArgs, updatePageArgs, updatePageUrlArgs, getPagesByParentIdArgs } from './pages-arguments'

class PagesService extends ApiBase implements IPagesService {
	_getByParentId
	_create: (data: createPageArgs) => Promise<IPageContext>
	_update
	_updateAlias

	constructor() {
		super()
		this._domain += 'pages'
		this._getByParentId = this._createSimpleFetch<IPageContext[]>({ method: 'GET' })
		this._create = this._createFetchWithBody<IPageContext>({ method: 'POST' })
		this._update = this._createFetchWithBody<IPageContext>({ method: 'PATCH' })
		this._updateAlias = this._createFetchWithBody<string>({ key: 'alias', method: 'PATCH' })
	}

	_convertMeta = (args: createPageFormArgs): string => {
		const { title, description } = args
		if (title && description) {
			return JSON.stringify({ title, description })
		}

		return ''
	}

	getByParentId = (args: getPagesByParentIdArgs) => this._getByParentId(`?siteId=${args.siteId}${args.parentId ? `&parentId=${args.parentId}` : ''}`)
	create = (args: createPageFormArgs) =>
		this._create({
			name: args.name,
			type: args.type,
			url: args.url,
			siteId: args.siteId,
			parentId: args.parentId,
			content: args.content,
			meta: this._convertMeta(args)
		})
	update = (args: updatePageArgs) => this._update(args)
	updateUrl = (args: updatePageUrlArgs) => this._updateAlias(args)
	getMainPage = async (siteId: number) => (await this.getByParentId({ siteId, parentId: null }))[0]
}

export default new PagesService() as IPagesService
