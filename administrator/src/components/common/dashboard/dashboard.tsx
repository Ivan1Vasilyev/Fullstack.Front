import { Box } from '@mui/material'
import { dashboardItemStyles, dashboardStyles } from './styles'

const Dashboard = ({
	leftSide,
	children
}: Readonly<{
	leftSide: React.ReactNode
	children: React.ReactNode
}>) => (
	<Box sx={dashboardStyles}>
		<Box sx={dashboardItemStyles}>{leftSide}</Box>
		<Box sx={dashboardItemStyles}>{children}</Box>
	</Box>
)

export default Dashboard
