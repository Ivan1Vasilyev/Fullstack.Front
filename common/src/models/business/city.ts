import { ITariff } from './tariff'

export type cityContext = {
	id: number
	providerId: number
	cityName: string
	domainCode: string
	tariffs: ITariff[]
}

export type cityModel = cityContext & {
	frontCode: string
	phoneLabel: string
	phoneLink: string
}
