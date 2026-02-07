import { Typography, Box } from '@mui/material'
import TestComp from './test'
import { backgroundColorPaper } from './theme/dark/dark-theme-values'

const TextComp = () => (
	<Box
		component='section'
		sx={{
			backgroundColor: backgroundColorPaper,
			padding: 2,
			borderRadius: 3,
		}}
	>
		<h1>Текст Аш 1</h1>

		<Typography component='span' color='primary'>
			Primary цвет
		</Typography>
		<Typography color='secondary'>Secondary цвет</Typography>
		<Typography color='textPrimary'>Основной текст</Typography>
		<Typography color='textSecondary'>Вторичный текст</Typography>
		<Typography color='error'>Ошибка</Typography>
		<Typography color='warning'>Предупреждение</Typography>
		<Typography color='info'>Информация</Typography>
		<Typography color='success'>Успех</Typography>
		<TestComp />
	</Box>
)

export default TextComp
