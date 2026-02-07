import Header from '@/components/common/header/header'
import '../../styles/globals.scss'

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ city: string }>
}>) {
	const { city } = await params

	return (
		<>
			<Header city={city} />
			<main>{children}</main>
		</>
	)
}
