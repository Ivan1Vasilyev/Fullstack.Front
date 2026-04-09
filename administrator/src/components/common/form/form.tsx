import { Box, Typography, Button } from '@mui/material'
import Notification, { NotificationProps } from '../notification/notification'
import { memo, useRef, useState } from 'react'
import { Signal } from '@preact/signals-react'
import { IProblemDetails } from '@frontend/common'

const Form = memo(
	({
		children,
		titleButtons,
		successMessage,
		title,
		formName,
		submitCallback,
		formInputCallback
	}: {
		children: React.ReactNode
		titleButtons?: React.ReactNode
		successMessage: Signal<string>
		title: string
		formName: string
		submitCallback: (data: { [k: string]: FormDataEntryValue }) => Promise<void>
		formInputCallback?: (e: React.ChangeEvent<HTMLFormElement>) => void
	}) => {
		const [notification, setNotification] = useState({} as NotificationProps)
		const [isLoading, setIsLoading] = useState(false)
		const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
		const formRef = useRef<HTMLFormElement>(null)

		const handleFormInput = (e: React.ChangeEvent<HTMLFormElement>) => {
			if (isSubmitDisabled) {
				setIsSubmitDisabled(false)
			}

			if (formInputCallback) {
				formInputCallback(e)
			}
		}

		const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault()

			setIsLoading(true)

			try {
				const formData = Object.fromEntries(new FormData(formRef.current || undefined).entries())

				await submitCallback(formData)

				setNotification({ isOpen: true, severity: 'success', message: successMessage.value })
				setIsSubmitDisabled(true)
			} catch (err) {
				console.log(err)
				const error = err as IProblemDetails
				const errorMessage = error.title && error.detail ? `${error.title}. ${error.detail}` : `Ошибка: ${(err as any).message || err}`

				setNotification({ isOpen: true, severity: 'error', message: errorMessage })
			} finally {
				setIsLoading(false)
			}
		}

		return (
			<Box sx={{ display: 'grid', gap: '30px', justifyContent: 'start' }}>
				<Box sx={{ display: 'flex', gap: '20px' }}>
					<Typography variant='h2'>{title}</Typography>
					{titleButtons}
				</Box>

				<Box
					component='form'
					onSubmit={submitHandler}
					onInput={handleFormInput}
					sx={{ display: 'grid', gap: '20px', justifyContent: 'start', alignContent: 'start' }}
					name={formName}
					ref={formRef}
				>
					{children}
					<Box sx={{ display: 'flex', gap: '10px' }}>
						<Button type='submit' variant='outlined' loading={isLoading} disabled={isSubmitDisabled}>
							Сохранить
						</Button>
					</Box>
					<Notification data={notification} />
				</Box>
			</Box>
		)
	}
)

export default Form
