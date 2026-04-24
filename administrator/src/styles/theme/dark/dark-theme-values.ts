import { ThemeOptions } from '@mui/material'

export const backgroundColorDefault = '#121212',
	backgroundColorPaper = '#1e1e1e',
	colorBorderPaper = '#2d2d2d',
	colorBorderPaperLight = '#3a3a3a',
	colorPrimaryMain = '#4f98d4',
	colorPrimaryLight = '#e3f2fd',
	colorPrimaryDark = '#42a5f5',
	colorSecondaryMain = '#ce93d8',
	textColorPrimary = '#fff',
	textColorSecondary = 'rgba(255, 255, 255, 0.7)',
	colorErrorMain = '#f44336',
	colorWarningMain = '#ffa726',
	colorInfoMain = '#29b6f6',
	colorSuccessMain = '#66bb6a'

const darkThemeValues = {
	palette: {
		mode: 'dark',
		primary: {
			main: colorPrimaryMain,
			light: colorPrimaryLight,
			dark: colorPrimaryDark,
		},
		secondary: {
			main: colorSecondaryMain,
		},
		background: {
			default: backgroundColorDefault,
			paper: backgroundColorPaper,
		},
		text: {
			primary: textColorPrimary,
			secondary: textColorSecondary,
		},
		error: {
			main: colorErrorMain,
		},
		warning: {
			main: colorWarningMain,
		},
		info: {
			main: colorInfoMain,
		},
		success: {
			main: colorSuccessMain,
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontSize: '2.5rem',
			fontWeight: 500,
		},
		h2: {
			fontSize: '2rem',
			fontWeight: 500,
		},
		h3: {
			fontSize: '1.75rem',
			fontWeight: 500,
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: 500,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: '#1e1e1e',
					backgroundImage: 'none',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#1a1a1a',
					backgroundImage: 'none',
				},
			},
		},
	},
} satisfies ThemeOptions

export default darkThemeValues
