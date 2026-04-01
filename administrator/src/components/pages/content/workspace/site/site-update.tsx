import { Box, Tooltip, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useCallback } from 'react'
import Form from '@/components/common/form/form'
import AddIcon from '@mui/icons-material/Add'
import { useSignal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
import { updateSiteArgs } from '@/lib/services/sites-service/sites-arguments'
import sitesService from '@/lib/services/sites-service/sites-service'
import { ISiteModel } from '@/signals/sites/site-model'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import { IProviderModel } from '@/signals/providers/provider-model'
import InputStandart from '@/components/common/form/input-standart'
import { tSite } from '@frontend/common'

export type siteUpdateProps = { site: ISiteModel; provider: IProviderModel }

const SiteUpdate = ({ site, provider }: siteUpdateProps) => {
	useSignals()
	const currentSite = useSignal<tSite>(site.model.value)
	const successMessage = useSignal<string>('')
	const isDisabled = useSignal<boolean>(true)

	const submitCallback = async (data: unknown) => {
		const updatedSite = await sitesService.update(data as updateSiteArgs)

		site.model.value = currentSite.value = updatedSite
		successMessage.value = `Сайт ${currentSite.value.domainName} обновлён`
		isDisabled.value = true
	}

	const formInputCallback = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
		currentSite.value = { ...currentSite.value, [e.target.name]: e.target.value }
	}, [])

	const openCreateForm = () => {
		WorkspacePropsByKey.value = { key: 'SiteCreate', props: { provider, contentKey: 'SiteCreate' } }
	}

	return (
		<Form
			title='Сайт'
			formName='site-update'
			titleButtons={
				<Box>
					<Tooltip title='Редактировать' placement='top'>
						<IconButton onClick={() => (isDisabled.value = false)} disabled={!isDisabled.value}>
							<EditIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title={`Создать сайт для провайдера ${provider.model.value.name}`} placement='top'>
						<IconButton onClick={openCreateForm}>
							<AddIcon />
						</IconButton>
					</Tooltip>
				</Box>
			}
			submitCallback={submitCallback}
			formInputCallback={formInputCallback}
			successMessage={successMessage}
		>
			<InputStandart name='domainName' label='Домен' value={currentSite.value.domainName} isDisabled={isDisabled.value} />
			<InputStandart name='yandexCounterKey' label='Ключ Яндекс метрики' value={currentSite.value.yandexCounterKey || ''} isDisabled={isDisabled.value} />

			<input type='hidden' name='id' value={currentSite.value.id} />
		</Form>
	)
}

export default SiteUpdate
