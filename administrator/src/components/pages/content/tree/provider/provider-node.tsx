import { Button } from '@mui/material'
import sitesService from '@/lib/services/sites-service/sites-service'
import SiteNode from '../site/site-node'
import TreeNode from '../tree-node'
import { useEffect } from 'react'
import { IProviderModel } from '../../../../../signals/providers/provider-model'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'

const ProviderNode = ({ provider }: { provider: IProviderModel }) => {
	useEffect(() => {
		;(async () => {
			if (provider.sites.value.length === 0) {
				const result = await sitesService.getByProviderId(provider.model.value.id)
				provider.setSites(result)
			}
		})()
	}, [])

	const openUpdateForm = () => {
		WorkspacePropsByKey.value = { key: 'ProviderUpdate', props: { provider, contentKey: `ProviderUpdate${provider.model.value.id}` } }
	}

	return (
		<TreeNode
			hasChildren={provider.sites.value.length > 0}
			buttonComponent={
				<Button variant='contained' size='small' onClick={openUpdateForm}>
					{provider.model.value.name}
				</Button>
			}
		>
			{provider.sites.value.map(site => (
				<SiteNode key={site.model.value.id} site={site} provider={provider} />
			))}
		</TreeNode>
	)
}

export default ProviderNode
