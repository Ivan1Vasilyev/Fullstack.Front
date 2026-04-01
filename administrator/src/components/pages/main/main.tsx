import { Box } from '@mui/material'

const Main = () => (
	<Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
		<Box sx={{ display: 'grid', gap: '10px', justifyItems: 'center', paddingBottom: 25 }}>
			<h1>Привет!</h1>
			<p>Делай авториацию, слабак!</p>
		</Box>
	</Box>
)

export default Main
