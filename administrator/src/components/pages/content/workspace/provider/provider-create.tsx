import providersService from '@/lib/services/providers-service/providers-service'
import { Box, FormControl, InputLabel, Input } from '@mui/material'
import { providerCreateArgs } from '@/lib/services/providers-service/providers-arguments'
import { providerList } from '@/signals/providers/provider-list'
import Form from '@/components/common/form/form'
import { batch, useSignal } from '@preact/signals-react'
import InputStandart from '@/components/common/input/input-standart'

const ProviderCreate = () => {
	const successMessage = useSignal<string>('')

	const submitCallback = async (data: unknown) => {
		const createdProvider = await providersService.create(data as providerCreateArgs)

		batch(() => {
			providerList.add(createdProvider)
			successMessage.value = `Провайдер создан: ${createdProvider.name}`
		})
	}

	return (
		<Form title='Новый провайдер' formName='provider-create' submitCallback={submitCallback} successMessage={successMessage}>
			<InputStandart name='name' label='Название' required />
		</Form>
	)
}

export default ProviderCreate
