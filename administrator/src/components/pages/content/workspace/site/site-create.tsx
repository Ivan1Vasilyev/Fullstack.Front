import Form from '@/components/common/form/form'
import InputStandart from '@/components/common/input/input-standart'
import { createSiteArgs } from '@/lib/services/sites-service/sites-arguments'
import sitesService from '@/lib/services/sites-service/sites-service'
import { getSiteStore } from '@/store/site-store'
import { tProvider } from '@frontend/common'

export type siteCreateProps = { provider: tProvider }

const SiteCreate = ({ provider }: siteCreateProps) => {
	const add = getSiteStore(provider.id)(state => state.add)

	const submitCallback = async (data: unknown) => {
		const createdSite = await sitesService.create(data as createSiteArgs)

		add(createdSite)
		return `Сайт создан: ${createdSite.domainName}`
	}

	return (
		<Form title={`Новый сайт для провайдера ${provider.name}`} formName='site-create' submitCallback={submitCallback}>
			<InputStandart name='domainName' label='Домен' />
			<InputStandart name='yandexCounterKey' label='Ключ Яндекс метрики' />
			<input type='hidden' name='providerId' value={provider.id} />
		</Form>
	)
}

export default SiteCreate
