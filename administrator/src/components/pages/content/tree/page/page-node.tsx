import { IPageContext } from '@frontend/common'
import { IPageModel } from '../../../../../signals/pages/page-model'
import { useSignal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
import pagesService from '@/lib/services/pages-service/pages-service'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import TreeNode from '../tree-node'
import { Button } from '@mui/material'

const PageNode = ({ page, siteId }: { page: IPageModel; siteId: number }) => {
	useSignals()

	const hasChildren = useSignal<boolean>(false)
	const children = useSignal<IPageContext[]>([])

	if (page.children.value.length === 0) {
		pagesService.getByParentId({ siteId, parentId: page.model.value.id }).then(pages => {
			hasChildren.value = pages.length > 0
			children.value = pages
		})
	}

	const openCallback = () => {
		if (page.children.value.length === 0 && children.value.length > 0) {
			page.setChildren(children.value)
		}
	}

	const openUpdateForm = () => {
		WorkspacePropsByKey.value = { key: 'PageUpdate', props: { page, contentKey: `PageUpdate${page.model.value.id}` } }
	}

	return (
		<TreeNode
			hasChildren={hasChildren}
			openCallback={openCallback}
			buttonComponent={
				<Button variant='outlined' onClick={openUpdateForm}>
					{page.model.value.name}
				</Button>
			}
		>
			{page.children.value.length > 0 && page.children.value.map(i => <PageNode page={i} siteId={siteId} />)}
		</TreeNode>
	)
}

export default PageNode
