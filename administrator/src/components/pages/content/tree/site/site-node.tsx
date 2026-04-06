import { Button } from '@mui/material'
import TreeNode from '../tree-node'
import { ISiteModel } from '@/signals/sites/site-model'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import { IProviderModel } from '@/signals/providers/provider-model'
import { useSignals } from '@preact/signals-react/runtime'

const SiteNode = ({ site, provider }: { site: ISiteModel; provider: IProviderModel }) => {
	useSignals()

	const openUpdateForm = () => {
		WorkspacePropsByKey.value = { key: 'SiteUpdate', props: { site, provider, contentKey: `SiteUpdate${site.model.value.id}` } }
	}
	const pages = [] as any[]

	return (
		<TreeNode
			hasChildren={false}
			buttonComponent={
				<Button variant='outlined' onClick={openUpdateForm}>
					{site.model.value.domainName}
				</Button>
			}
		>
			{pages.map(page => (
				<Button key={page.id} variant='outlined'>
					{page.name}
				</Button>
			))}
		</TreeNode>
	)
}

export default SiteNode
