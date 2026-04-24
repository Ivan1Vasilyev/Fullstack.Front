export interface IFilesService {
	get: () => Promise<tFileLoader[]>
	load: (data: FormData) => Promise<any[]>
}

export type tFileLoader = { loaderName: string }
