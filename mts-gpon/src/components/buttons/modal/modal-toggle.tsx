'use client'

import { useState } from 'react'
import ModalButton, { modalButtonProps } from './modal'

const ModalToggleButton = ({ children, className, activeClass, ...rest }: modalButtonProps) => {
	const [isActive, setActive] = useState(false)
	const toggle = () => setActive(x => !x)

	return (
		<ModalButton onClick={toggle} className={`${className}${isActive ? ' ' + activeClass : ''}`} {...rest}>
			{children}
		</ModalButton>
	)
}

export default ModalToggleButton
