import { Box, Tooltip, IconButton } from '@mui/material'
import { buttonStyle, dropWrapStyle, dropStyle } from './styles'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone'
import React, { useState } from 'react'

const TreeNode = ({
	children,
	buttonComponent: ButtonComponent,
	hasChildren
}: Readonly<{ children: React.ReactNode; buttonComponent: React.ReactNode; hasChildren: boolean }>) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isFirstOpen, setIsFirstOpen] = useState<boolean>(false)

	const onClick = () => {
		setIsOpen(i => !i)

		if (!isFirstOpen) {
			setIsFirstOpen(true)
		}
	}

	return (
		<div>
			<Box sx={buttonStyle}>
				{ButtonComponent}
				{hasChildren && (
					<Tooltip title={isOpen ? 'Скрыть' : 'Показать'} placement='right'>
						<IconButton onClick={onClick} sx={{ transition: 'transform .3s ease-out', transform: isOpen ? 'rotate(90deg)' : '' }}>
							<KeyboardArrowRightTwoToneIcon fontSize='small' />
						</IconButton>
					</Tooltip>
				)}
			</Box>
			<Box sx={{ ...dropWrapStyle, gridTemplateRows: `${isOpen ? '1' : '0'}fr`, paddingTop: isOpen ? '8px' : '0' }}>
				<Box sx={dropStyle}>{isFirstOpen && children}</Box>
			</Box>
		</div>
	)
}

export default TreeNode
