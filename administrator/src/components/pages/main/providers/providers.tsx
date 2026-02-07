import apiService from '@/lib/api/api-service'
import Box from '@mui/material/Box'
import ProviderItem from './provider-item'
import { colorBorderPaper } from '@/components/theme/dark/dark-theme-values'

const styles = {
	p: 2,
	border: `1px solid ${colorBorderPaper}`,
	borderRadius: 3,
	bgcolor: 'background.paper',
	display: 'grid',
	alignContent: 'start',
	gap: '8px',
	width: '100%',
}

const Providers = async () => {
	const providers = await apiService.getProviders()

	return (
		<Box sx={styles}>
			{providers.map(i => (
				<ProviderItem key={i.id} provider={i} />
			))}
		</Box>
	)
}

export default Providers
