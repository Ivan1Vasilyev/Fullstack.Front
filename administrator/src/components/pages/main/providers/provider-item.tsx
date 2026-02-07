'use client'

import { Box, Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import { tProvider } from '../../../../../../common/src/models/business/provider'
import { useState } from 'react'
import useSWR from 'swr'
import apiService from '@/lib/api/api-service'
import { tSite } from '@frontend/common/models/business/site'
import styles from './provider-item.module.scss'

const ProviderItem = ({ provider }: { provider: tProvider }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [isOpenSites, setIsOpenSites] = useState<boolean>(false)
	const [sites, setSites] = useState<tSite[]>([])
	// const { data, error, isLoading } = useSWR(provider.id.toString(), apiService.getSites)
	const open = Boolean(anchorEl)

	const contextMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setAnchorEl(event.currentTarget)
	}

	const clickHandler = async () => {
		if (isOpenSites) {
			setIsOpenSites(false)
			return
		}

		if (!sites.length) {
			const recievedData = await apiService.getSites(provider.id)
			setSites(recievedData)
		}

		setIsOpenSites(true)
	}

	const handleClose = () => setAnchorEl(null)

	const menuId = `menu${provider.code}`

	return (
		<div>
			<Button
				variant='contained'
				id={menuId}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onContextMenu={contextMenuHandler}
				onClick={clickHandler}
			>
				{provider.name}
			</Button>
			<Menu
				id={menuId}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					list: {
						'aria-labelledby': 'basic-button',
					},
				}}
			>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<EditTwoToneIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Edit</ListItemText>
				</MenuItem>
			</Menu>

			<Box sx={{ padding: '8px 0 0 4px', display: 'grid', gridTemplateRows: `${isOpenSites ? '1' : '0'}fr`, transition: 'grid-template-rows 0.3s ease-out' }}>
				<Box sx={{ overflow: 'hidden', display: 'grid', gap: '8px', justifyContent: 'start' }}>
					{sites.map(site => (
						<Button key={site.id} variant='outlined'>
							{site.domainName}
						</Button>
					))}
				</Box>
			</Box>
		</div>
	)
}

export default ProviderItem
