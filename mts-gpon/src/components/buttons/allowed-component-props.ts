import Link, { LinkProps } from 'next/link'
import Button, { buttonProps } from './base/button'
import ModalButton, { modalButtonProps } from './modal/modal'

export type allowedComponentProps =
	| (LinkProps & { component: typeof Link })
	| (buttonProps & { component: typeof Button })
	| (modalButtonProps & { component: typeof ModalButton })
