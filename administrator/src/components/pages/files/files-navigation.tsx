import { ButtonGroup, Button, Box } from '@mui/material'
import Link from 'next/link'

const FilesNavigation = () => {
	return (
		<Box sx={{ display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
			<ButtonGroup sx={{ alignItems: 'stretch', justifyContent: 'stretch' }} variant='contained' color='secondary' size='large' orientation='vertical' fullWidth>
				<Link href='files/tariffs' passHref>
					<Button>Тарифы</Button>
				</Link>
				<Link href='/files/addresses'>
					<Button>Адреса</Button>
				</Link>
			</ButtonGroup>
		</Box>
	)
}

export default FilesNavigation
