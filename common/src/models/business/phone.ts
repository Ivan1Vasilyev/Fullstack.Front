export type phoneDb = {
	id: number
	label: string
	link: string
	name: string
	role: number
	siteId: number
	cityTags: number[]
}

export type tPhone = {
	id: number
	label: string
	link: string
	name: string
	role: phoneRoleEnum
	siteId: number
	cityTags: tCityTag[]
}

export enum phoneRoleEnum {
	order,
	support
}

export type tCityTag = {
	id: number
	providerId: number
	name: string
}
