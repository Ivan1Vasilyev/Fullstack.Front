import { Box, Divider } from '@mui/material'
import ProviderNode from './provider/provider-node'
import { memo, useRef } from 'react'
import ProviderAdd from './provider/provider-add'
import { useProvider } from '@/store/provider-store'
import { tProvider } from '@frontend/common'

const Tree = ({ providers }: { providers: tProvider[] }) => {
	const isInit = useRef(false)
	const currentProviders = useProvider(state => state.providers)
	const setAll = useProvider(state => state.setAll)

	if (!isInit.current) {
		setAll(providers)
		isInit.current = true
	}

	return (
		<Box sx={{ display: 'grid', gap: '10px' }}>
			{currentProviders.map(i => (
				<ProviderNode key={i.id} provider={i} />
			))}
			<Divider />
			<ProviderAdd />
		</Box>
	)
}

export default memo(Tree)
