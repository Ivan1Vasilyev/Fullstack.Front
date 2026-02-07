import Providers from '@/components/pages/main/providers/providers'
import TextComp from '../components/text'
import LeftSide from '@/components/pages/main/left-side/left-side'
import { Box } from '@mui/material'

export default async function Home() {
	return (
		<Box component='main' sx={{ flex: 1, display: 'grid', gridTemplateColumns: '30% 1fr', gap: '15px', padding: '0 15px 15px' }}>
			<LeftSide />
			<TextComp />
		</Box>
	)
}
