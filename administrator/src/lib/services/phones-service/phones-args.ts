import { phoneRoleEnum } from '@frontend/common'

export type createPhoneArgs = {
	label: string
	link: string
	name: string
	role: phoneRoleEnum
	siteId: number
	cityTagIds: number[]
}

export type updatePhoneArgs = createPhoneArgs & {
	id: number
}
