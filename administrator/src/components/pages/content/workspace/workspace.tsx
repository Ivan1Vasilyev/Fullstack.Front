import { ComponentType } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Tooltip } from '@mui/material'
import { workspaceBlocksRegistry, workspaceBlockNames, workspaceBlockMap } from './content-block-registry'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import { useSignals } from '@preact/signals-react/runtime'

const Workspace = <K extends workspaceBlockNames>() => {
	useSignals()

	const { key, props } = WorkspacePropsByKey.value as { key: K | null; props: workspaceBlockMap[K] | null }
	if (key === null || props === null) return

	const Block = workspaceBlocksRegistry[key] as ComponentType<workspaceBlockMap[K]>

	const closeHandler = () => {
		WorkspacePropsByKey.value = { key: null, props: null }
	}

	return (
		<Box sx={{ position: 'relative' }}>
			<Block {...props} />
			<Tooltip title='Закрыть' placement='top' sx={{ position: 'absolute', top: 0, right: 0 }}>
				<IconButton onClick={closeHandler}>
					<CloseIcon />
				</IconButton>
			</Tooltip>
		</Box>
	)
}

export default Workspace
