import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import darkTheme from '@/components/theme/dark/dark-theme'
import type { Metadata } from 'next'
import '../styles/globals.scss'
import Header from '@/components/common/header/header'

export const metadata: Metadata = {
	title: 'Администратор',
	description: 'Чёрный, ты разобрался?',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' data-mui-color-scheme='dark'>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline />
						<Header />
						<main>{children}</main>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
