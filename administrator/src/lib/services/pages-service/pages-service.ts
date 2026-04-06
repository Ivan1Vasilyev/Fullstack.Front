import { IPage } from '@/lib/models/i-page'
import ApiBase from '../api-base/api-base'
import { IPagesService } from './i-pages-service'
import { createPageArgs, updatePageArgs, updatePageAliasArgs, createPageContentArgs, upatePageContentArgs, getPagesByParentIdArgs } from './pages-arguments'

class PagesService extends ApiBase implements IPagesService {
	_getByParentId
	_create
	_update
	_updateAlias
	_createContent
	_updateContent
	_deleteContent

	constructor() {
		super()
		this._domain += 'pages'
		this._getByParentId = this._createFetchWithBody<IPage[]>({ key: '', method: 'GET' })
		this._create = this._createFetchWithBody<IPage>({ key: '', method: 'POST' })
		this._update = this._createFetchWithBody<IPage>({ key: '', method: 'PATCH' })
		this._updateAlias = this._createFetchWithBody<string>({ key: 'alias', method: 'PATCH' })
		this._createContent = this._createFetchWithBody<string>({ key: 'content', method: 'POST' })
		this._updateContent = this._createFetchWithBody<string>({ key: 'content', method: 'PATCH' })
		this._deleteContent = this._createFetchWithBody<number>({ key: 'content', method: 'DELETE' })
	}

	getByParentId = (args: getPagesByParentIdArgs) => this._getByParentId(args)
	create = (args: createPageArgs) => this._create(args)
	update = (args: updatePageArgs) => this._update(args)
	updateAlias = (args: updatePageAliasArgs) => this._updateAlias(args)
	createContent = (args: createPageContentArgs) => this._createContent(args)
	updateContent = (args: upatePageContentArgs) => this._updateContent(args)
	deleteContent = (id: number) => this._deleteContent(id)
}

export default new PagesService() as IPagesService
