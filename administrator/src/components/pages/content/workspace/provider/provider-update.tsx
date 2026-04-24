import { Typography, Paper, Box, IconButton, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { useCallback, useState } from 'react'
import providersService from '@/lib/services/providers-service/providers-service'
import Form from '@/components/common/form/form'
import { providerUpdateArgs } from '@/lib/services/providers-service/providers-arguments'
import InputStandart from '@/components/common/input/input-standart'
import { tProvider } from '@frontend/common'
import { useProvider } from '@/store/provider-store'
import { useWorkspace } from '@/store/workspace-store'

export type providerUpdateProps = { provider: tProvider }

const ProviderUpdate = ({ provider }: providerUpdateProps) => {
	const update = useProvider(state => state.update)

	const [currentProvider, setCurrentProvider] = useState<tProvider>(provider)
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const submitCallback = async (data: unknown) => {
		const updatedProvider = await providersService.update(data as providerUpdateArgs)

		update(updatedProvider)
		setIsDisabled(true)

		return `Провайдер обновлён. Имя: ${updatedProvider.name}, Код: ${updatedProvider.code}`
	}

	const formInputCallback = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
		setCurrentProvider(state => ({ ...state, [e.target.name]: e.target.value }))
	}, [])

	const openCreateSiteForm = () => {
		useWorkspace.setState({ key: 'SiteCreate', props: { provider, contentKey: 'SiteCreate' } })
	}

	return (
		<Form
			submitCallback={submitCallback}
			formInputCallback={formInputCallback}
			title='Провайдер'
			formName='provider-update'
			titleButtons={
				<Box>
					<Tooltip title='Редактировать' placement='top'>
						<IconButton onClick={() => setIsDisabled(false)} disabled={!isDisabled}>
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
			<InputStandart name='name' label='Название' value={currentProvider.name} isDisabled={isDisabled} required />
			<input type='hidden' name='providerId' value={currentProvider.id} />
			<Paper variant='outlined' sx={{ display: 'flex', alignItems: 'baseline', gap: 2, padding: 1 }}>
				<Typography color='textDisabled' fontSize={13}>
					Код:
				</Typography>
				<Typography color='textSecondary' fontSize={15}>
					{currentProvider.code}
				</Typography>
			</Paper>
		</Form>
	)
}

export default ProviderUpdate
