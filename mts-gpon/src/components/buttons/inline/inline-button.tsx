import { allowedComponentProps } from '../allowed-component-props'
import styles from './inline-button.module.scss'

type inlineButtonProps = allowedComponentProps & {
	children: React.ReactNode
}

const InlineButton = ({ component: Component, ...props }: inlineButtonProps) => <Component className={styles.button} {...(props as any)} />

export default InlineButton
