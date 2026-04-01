export type createSiteArgs = {
	providerId: number
	domainName: string
	yandexCounterKey?: string
}

export type updateSiteArgs = {
	id: number
	domain: string
	yandexCounterKey?: string
}
