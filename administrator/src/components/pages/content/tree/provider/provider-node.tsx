import { Button } from '@mui/material'
import sitesService from '@/lib/services/sites-service/sites-service'
import SiteNode from '../site/site-node'
import TreeNode from '../tree-node'
import { tProvider } from '@frontend/common'
import { useState } from 'react'
import { getSiteStore } from '@/store/site-store'
import { useWorkspace } from '@/store/workspace-store'

const ProviderNode = ({ provider }: { provider: tProvider }) => {
	const [hasChildren, setHasChildren] = useState<boolean>(false)

	console.log('provider node')
	console.log(provider.name)
	const sites = getSiteStore(provider.id)(state => state.sites)
	const setSites = getSiteStore(provider.id)(state => state.setSites)

	if (!sites.length) {
		sitesService.getByProviderId(provider.id).then(result => {
			if (result.length > 0) {
				setHasChildren(true)
				setSites(result)
			}
		})
	}

	const openUpdateForm = () => {
		useWorkspace.setState({ key: 'ProviderUpdate', props: { provider, contentKey: `ProviderUpdate${provider.id}` } })
	}

	return (
		<TreeNode
			hasChildren={hasChildren}
			buttonComponent={
				<Button variant='contained' size='small' onClick={openUpdateForm}>
					{provider.name}
				</Button>
			}
		>
			{sites.map(site => (
				<SiteNode key={site.id} site={site} />
			))}
		</TreeNode>
	)
}

export default ProviderNode
