import { ReactNode } from 'react'

export type buttonProps = {
	children: ReactNode
	onClick: (e: React.MouseEvent<HTMLElement>) => void
	[key: string]: any
}

const Button = ({ children, onClick, ...rest }: buttonProps) => (
	<button onClick={onClick} {...rest}>
		{children}
	</button>
)

export default Button
