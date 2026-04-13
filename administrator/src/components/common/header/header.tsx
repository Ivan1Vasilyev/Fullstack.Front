import { Box, Button, ButtonGroup, IconButton, Tooltip } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'

const Header = () => (
	<Box component='header' sx={{ height: '100px', p: 2, display: 'flex', gap: 1, alignItems: 'flex-end', justifyContent: 'space-between' }}>
		<ButtonGroup variant='outlined' size='large'>
			<Link href='/content'>
				<Button>Контет</Button>
			</Link>
			<Link href='/media'>
				<Button>Медиа</Button>
			</Link>
			<Link href='/files'>
				<Button>Загрузка файлов</Button>
			</Link>
		</ButtonGroup>
		<Tooltip title='Главная' placement='left'>
			<Link href='/'>
				<IconButton size='large'>
					<HomeIcon />
				</IconButton>
			</Link>
		</Tooltip>
	</Box>
)

export default Header
