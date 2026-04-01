import { SnackbarCloseReason, Snackbar, Slide, Alert } from '@mui/material'
import { useEffect, useState } from 'react'

export type NotificationProps = {
	isOpen: boolean
	message: string
	severity: 'success' | 'error' | 'info' | 'warning'
}

const Notification = ({ data }: { data: NotificationProps }) => {
	const [open, setOpen] = useState(false)

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	useEffect(() => {
		setOpen(data.isOpen)
	}, [data])

	return (
		<Snackbar open={open} onClose={handleClose} slots={{ transition: Slide }} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={5000}>
			<Alert onClose={handleClose} severity={data.severity} variant='filled' sx={{ width: '100%' }}>
				{data.message}
			</Alert>
		</Snackbar>
	)
}

export default Notification
