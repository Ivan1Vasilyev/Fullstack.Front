import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import AddIcon from '@mui/icons-material/Add'
import { Tooltip, Fab } from '@mui/material'

const ProviderAdd = () => (
	<Tooltip title='Создать провайдер' placement='right'>
		<Fab size='small' color='secondary' onClick={() => (WorkspacePropsByKey.value = { key: 'ProviderCreate', props: { contentKey: 'ProviderCreate' } })}>
			<AddIcon />
		</Fab>
	</Tooltip>
)

export default ProviderAdd
