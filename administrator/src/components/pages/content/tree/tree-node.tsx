import { Box, Tooltip, IconButton } from '@mui/material'
import { buttonStyle, dropWrapStyle, dropStyle } from './styles'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone'
import { Signal, useSignal } from '@preact/signals-react'
import React from 'react'

const TreeNode = ({
	children,
	buttonComponent: ButtonComponent,
	hasChildren,
	openCallback
}: Readonly<{ children: React.ReactNode; buttonComponent: React.ReactNode; hasChildren: Signal<boolean>; openCallback: () => void }>) => {
	const isOpen = useSignal<boolean>(false)

	const onClick = () => {
		isOpen.value = !isOpen.value
		openCallback()
	}

	return (
		<div>
			<Box sx={buttonStyle}>
				{ButtonComponent}
				{hasChildren.value && (
					<Tooltip title={isOpen.value ? 'Скрыть' : 'Показать'} placement='right'>
						<IconButton onClick={onClick} sx={{ transition: 'transform .3s ease-out', transform: isOpen.value ? 'rotate(90deg)' : '' }}>
							<KeyboardArrowRightTwoToneIcon fontSize='small' />
						</IconButton>
					</Tooltip>
				)}
			</Box>
			<Box sx={{ ...dropWrapStyle, gridTemplateRows: `${isOpen.value ? '1' : '0'}fr`, paddingTop: isOpen.value ? '8px' : '0' }}>
				<Box sx={dropStyle}>{children}</Box>
			</Box>
		</div>
	)
}

export default TreeNode
