import { Box, Button, ButtonGroup, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'

const Header = () => (
	<Box component='header' sx={{ height: '100px', p: 2, display: 'flex', gap: 1, alignItems: 'flex-end', justifyContent: 'space-between' }}>
		<ButtonGroup variant='outlined' size='large'>
			<Link href='/content' passHref>
				<Button>Контет</Button>
			</Link>
			<Link href='/media'>
				<Button>Медиа</Button>
			</Link>
		</ButtonGroup>
		<Link href='/'>
			<IconButton size='large'>
				<HomeIcon />
			</IconButton>
		</Link>
	</Box>
)

export default Header
