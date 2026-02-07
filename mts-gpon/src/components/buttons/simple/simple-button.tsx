import styles from './simple-button.module.scss'
import { buttonColorEnum } from '../button-color-enum'
import { allowedComponentProps } from '../allowed-component-props'

type simpleButtonProps = allowedComponentProps & {
	color: buttonColorEnum
	children: React.ReactNode
	className?: string
	active?: boolean
}

const SimpleButton = ({ component: Component, color, active, className, ...props }: simpleButtonProps) => {
	const classString = `${styles.button} ${className ? ' ' + className : ''} ${styles[color] || styles.red}${active ? ' ' + styles.active : ''}`
	return <Component className={classString} {...(props as any)} />
}

export default SimpleButton
