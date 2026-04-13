import Form from '@/components/common/form/form'
import InputStandart from '@/components/common/input/input-standart'
import { createSiteArgs } from '@/lib/services/sites-service/sites-arguments'
import sitesService from '@/lib/services/sites-service/sites-service'
import { IProviderModel } from '@/signals/providers/provider-model'
import { batch, useSignal } from '@preact/signals-react'

export type siteCreateProps = { provider: IProviderModel }

const SiteCreate = ({ provider }: siteCreateProps) => {
	const successMessage = useSignal<string>('')

	const submitCallback = async (data: unknown) => {
		const createdSite = await sitesService.create(data as createSiteArgs)

		batch(() => {
			provider.addSite(createdSite)
			successMessage.value = `Сайт создан: ${createdSite.domainName}`
		})
	}

	return (
		<Form title={`Новый сайт для провайдера ${provider.model.value.name}`} formName='site-create' submitCallback={submitCallback} successMessage={successMessage}>
			<InputStandart name='domainName' label='Домен' />
			<InputStandart name='yandexCounterKey' label='Ключ Яндекс метрики' />
			<input type='hidden' name='providerId' value={provider.model.value.id} />
		</Form>
	)
}

export default SiteCreate
