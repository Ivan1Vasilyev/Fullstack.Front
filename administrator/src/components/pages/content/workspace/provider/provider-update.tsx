import { FormControl, InputLabel, Input, Typography, Paper, Box, IconButton, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { useCallback } from 'react'
import providersService from '@/lib/services/providers-service/providers-service'
import Form from '@/components/common/form/form'
import { batch, useSignal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
import { providerUpdateArgs } from '@/lib/services/providers-service/providers-arguments'
import { IProviderModel } from '../../../../../signals/providers/provider-model'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import InputStandart from '@/components/common/input/input-standart'
import { tProvider } from '@frontend/common'

export type providerUpdateProps = { provider: IProviderModel }

const ProviderUpdate = ({ provider }: providerUpdateProps) => {
	useSignals()

	const currentProvider = useSignal<tProvider>(provider.model.value)
	const successMessage = useSignal<string>('')
	const isDisabled = useSignal<boolean>(true)

	const submitCallback = async (data: unknown) => {
		const updatedProvider = await providersService.update(data as providerUpdateArgs)

		batch(() => {
			currentProvider.value = updatedProvider
			provider.update(updatedProvider)
			successMessage.value = `Провайдер обновлён. Имя: ${updatedProvider.name}, Код: ${updatedProvider.code}`
			isDisabled.value = true
		})
	}

	const formInputCallback = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
		currentProvider.value = { ...currentProvider.value, [e.target.name]: e.target.value }
	}, [])

	const openCreateSiteForm = () => {
		WorkspacePropsByKey.value = { key: 'SiteCreate', props: { provider, contentKey: 'SiteCreate' } }
	}

	return (
		<Form
			submitCallback={submitCallback}
			formInputCallback={formInputCallback}
			successMessage={successMessage}
			title='Провайдер'
			formName='provider-update'
			titleButtons={
				<Box>
					<Tooltip title='Редактировать' placement='top'>
						<IconButton onClick={() => (isDisabled.value = false)} disabled={!isDisabled.value}>
							<EditIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title='Создать сайт' placement='top'>
						<IconButton onClick={openCreateSiteForm}>
							<AddIcon />
						</IconButton>
					</Tooltip>
				</Box>
			}
		>
			<InputStandart name='name' label='Название' value={currentProvider.value.name} isDisabled={isDisabled.value} required />
			<input type='hidden' name='providerId' value={currentProvider.value.id} />
			<Paper variant='outlined' sx={{ display: 'flex', alignItems: 'baseline', gap: 2, padding: 1 }}>
				<Typography color='textDisabled' fontSize={13}>
					Код:
				</Typography>
				<Typography color='textSecondary' fontSize={15}>
					{currentProvider.value.code}
				</Typography>
			</Paper>
		</Form>
	)
}

export default ProviderUpdate
