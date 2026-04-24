import { Box, Tooltip, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useCallback, useState } from 'react'
import Form from '@/components/common/form/form'
import AddIcon from '@mui/icons-material/Add'
import { updateSiteArgs } from '@/lib/services/sites-service/sites-arguments'
import sitesService from '@/lib/services/sites-service/sites-service'
import InputStandart from '@/components/common/input/input-standart'
import { tSite } from '@frontend/common'
import { useWorkspace } from '@/store/workspace-store'
import { getSiteStore } from '@/store/site-store'

export type siteUpdateProps = { site: tSite; hasMainPage: boolean; providerId: number }

const SiteUpdate = ({ site, hasMainPage, providerId }: siteUpdateProps) => {
	const [currentSite, setCurrentSite] = useState<tSite>(site)
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const { update } = getSiteStore(providerId)()

	const submitCallback = async (data: unknown) => {
		const updatedSite = await sitesService.update(data as updateSiteArgs)
		update(updatedSite)
		setCurrentSite(updatedSite)
		setIsDisabled(true)
		return `Сайт ${currentSite.domainName} обновлён`
	}

	const formInputCallback = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
		setCurrentSite(state => ({ ...state, [e.target.name]: e.target.value }))
	}, [])

	const openCreateForm = () => {
		useWorkspace.setState({
			key: 'PageCreate',
			props: {
				siteId: site.id,
				parentId: null,
				onSubmit: () => {},
				contentKey: 'PageCreate'
			}
		})
	}

	return (
		<Form
			title='Сайт'
			formName='site-update'
			titleButtons={
				<Box>
					<Tooltip title='Редактировать' placement='top'>
						<IconButton onClick={() => setIsDisabled(false)} disabled={!isDisabled}>
							<EditIcon />
						</IconButton>
					</Tooltip>
					{!hasMainPage && (
						<Tooltip title={`Создать главную страницу`} placement='top'>
							<IconButton onClick={openCreateForm}>
								<AddIcon />
							</IconButton>
						</Tooltip>
					)}
				</Box>
			}
			submitCallback={submitCallback}
			formInputCallback={formInputCallback}
		>
			<InputStandart name='domainName' label='Домен' value={currentSite.domainName} isDisabled={isDisabled} />
			<InputStandart name='yandexCounterKey' label='Ключ Яндекс метрики' value={currentSite.yandexCounterKey || ''} isDisabled={isDisabled} />

			<input type='hidden' name='id' value={currentSite.id} />
		</Form>
	)
}

export default SiteUpdate
