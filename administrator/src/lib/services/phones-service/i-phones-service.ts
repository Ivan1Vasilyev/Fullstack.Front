import { phoneDb } from '@frontend/common'
import { createPhoneArgs, updatePhoneArgs } from './phones-args'

export interface IPhonesService {
	getBysiteId: (id: number) => Promise<phoneDb[]>
	create: (args: createPhoneArgs) => Promise<phoneDb>
	update: (args: updatePhoneArgs) => Promise<phoneDb>
	delete: (id: number) => Promise<boolean>
}
