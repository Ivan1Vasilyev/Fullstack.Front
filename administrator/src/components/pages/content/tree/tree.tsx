import { Box, Divider, Tooltip, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ProviderNode from './provider/provider-node'
import { useSignals } from '@preact/signals-react/runtime'
import { providerList } from '@/signals/providers/provider-list'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'

const Tree = () => {
	useSignals()
	const openCreateForm = () => {
		WorkspacePropsByKey.value = { key: 'ProviderCreate', props: { contentKey: 'ProviderCreate' } }
	}

	return (
		<Box sx={{ display: 'grid', gap: '10px' }}>
			{providerList.items.value.map(i => (
				<ProviderNode key={i.model.value.id} provider={i} />
			))}
			<Divider />
			<Tooltip title='Создать провайдер' placement='right'>
				<Fab size='small' color='secondary' onClick={openCreateForm}>
					<AddIcon />
				</Fab>
			</Tooltip>
		</Box>
	)
}

export default Tree
