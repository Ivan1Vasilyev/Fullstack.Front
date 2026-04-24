import { useWorkspace } from '@/store/workspace-store'
import AddIcon from '@mui/icons-material/Add'
import { Tooltip, Fab } from '@mui/material'

const ProviderAdd = () => (
	<Tooltip title='Создать провайдер' placement='right'>
		<Fab size='small' color='secondary' onClick={() => useWorkspace.setState({ key: 'ProviderCreate', props: { contentKey: 'ProviderCreate' } })}>
			<AddIcon />
		</Fab>
	</Tooltip>
)

export default ProviderAdd
