import providersService from '@/lib/services/providers-service/providers-service'
import { providerCreateArgs } from '@/lib/services/providers-service/providers-arguments'
import Form from '@/components/common/form/form'
import InputStandart from '@/components/common/input/input-standart'
import { useProvider } from '@/store/provider-store'

const ProviderCreate = () => {
	const add = useProvider(state => state.add)
	const submitCallback = async (data: unknown) => {
		const createdProvider = await providersService.create(data as providerCreateArgs)

		add(createdProvider)
		return `Провайдер создан: ${createdProvider.name}`
	}

	return (
		<Form title='Новый провайдер' formName='provider-create' submitCallback={submitCallback}>
			<InputStandart name='name' label='Название' required />
		</Form>
	)
}

export default ProviderCreate
