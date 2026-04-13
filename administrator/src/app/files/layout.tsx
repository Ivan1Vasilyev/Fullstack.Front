import Dashboard from '@/components/common/dashboard/dashboard'
import FilesNavigation from '@/components/pages/files/files-navigation'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <Dashboard leftSide={<FilesNavigation />}>{children}</Dashboard>
}
