import { Box, Tooltip, IconButton } from '@mui/material'
import { buttonStyle, dropWrapStyle, dropStyle } from './styles'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone'
import { useSignal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
import React from 'react'

const TreeNode = ({
	children,
	buttonComponent: ButtonComponent,
	hasChildren
}: Readonly<{ children: React.ReactNode; buttonComponent: React.ReactNode; hasChildren: boolean }>) => {
	useSignals()
	const isOpenSites = useSignal<boolean>(false)

	return (
		<div>
			<Box sx={buttonStyle}>
				{ButtonComponent}
				{hasChildren && (
					<Tooltip title={isOpenSites.value ? 'Скрыть' : 'Показать'} placement='right'>
						<IconButton
							onClick={() => (isOpenSites.value = !isOpenSites.value)}
							sx={{ transition: 'transform .3s ease-out', transform: isOpenSites.value ? 'rotate(90deg)' : '' }}
						>
							<KeyboardArrowRightTwoToneIcon fontSize='small' />
						</IconButton>
					</Tooltip>
				)}
			</Box>
			<Box sx={{ ...dropWrapStyle, gridTemplateRows: `${isOpenSites.value ? '1' : '0'}fr`, paddingTop: isOpenSites.value ? '8px' : '0' }}>
				<Box sx={dropStyle}>{children}</Box>
			</Box>
		</div>
	)
}

export default TreeNode
