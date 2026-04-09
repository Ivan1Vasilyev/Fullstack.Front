import { Button } from '@mui/material'
import sitesService from '@/lib/services/sites-service/sites-service'
import SiteNode from '../site/site-node'
import TreeNode from '../tree-node'
import { IProviderModel } from '../../../../../signals/providers/provider-model'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import { useSignal, useSignals } from '@preact/signals-react/runtime'
import { tSite } from '@frontend/common'

const ProviderNode = ({ provider }: { provider: IProviderModel }) => {
	useSignals()

	const hasChildren = useSignal<boolean>(false)
	const sites = useSignal<tSite[]>([])

	if (provider.sites.value.length === 0) {
		sitesService.getByProviderId(provider.model.value.id).then(result => {
			hasChildren.value = result.length > 0
			sites.value = result
		})
	}

	const openCallback = () => {
		if (provider.sites.value.length === 0 && sites.value.length > 0) {
			provider.setSites(sites.value)
		}
	}

	const openUpdateForm = () => {
		WorkspacePropsByKey.value = { key: 'ProviderUpdate', props: { provider, contentKey: `ProviderUpdate${provider.model.value.id}` } }
	}

	return (
		<TreeNode
			hasChildren={hasChildren}
			openCallback={openCallback}
			buttonComponent={
				<Button variant='contained' size='small' onClick={openUpdateForm}>
					{provider.model.value.name}
				</Button>
			}
		>
			{provider.sites.value.map(site => (
				<SiteNode key={site.model.value.id} site={site} />
			))}
		</TreeNode>
	)
}

export default ProviderNode
