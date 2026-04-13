import { Box, Divider } from '@mui/material'
import ProviderNode from './provider/provider-node'
import { providerList } from '@/signals/providers/provider-list'
import { memo } from 'react'
import ProviderAdd from './provider/provider-add'

const Tree = () => (
	<Box sx={{ display: 'grid', gap: '10px' }}>
		{providerList.items.value.map(i => (
			<ProviderNode key={i.model.value.id} provider={i} />
		))}
		<Divider />
		<ProviderAdd />
	</Box>
)

export default memo(Tree)
