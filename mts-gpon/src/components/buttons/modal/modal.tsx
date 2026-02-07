'use client'

import Button, { buttonProps } from '../base/button'

export interface modalButtonProps extends Omit<buttonProps, 'onClick'> {
	modalType: string
	onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const ModalButton = ({ children, modalType, onClick, ...rest }: modalButtonProps) => {
	const openPopup = (event: React.MouseEvent<HTMLElement>) => {
		onClick?.(event)

		console.log(`open modal: ${modalType}`)
	}

	return (
		<Button onClick={openPopup} {...rest}>
			{children}
		</Button>
	)
}

export default ModalButton
