import { IPageContext } from '@frontend/common'
import pagesService from '@/lib/services/pages-service/pages-service'
import TreeNode from '../tree-node'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useWorkspace } from '@/store/workspace-store'

const PageNode = ({ page, siteId }: { page: IPageContext; siteId: number }) => {
	const [hasChildren, setHasChildren] = useState<boolean>(false)
	const [children, setChildren] = useState<IPageContext[]>([])

	if (children.length === 0) {
		pagesService.getByParentId({ siteId, parentId: page.id }).then(pages => {
			if (pages.length > 0) {
				setHasChildren(true)
				setChildren(pages)
			}
		})
	}

	const openUpdateForm = () => {
		useWorkspace.setState({ key: 'PageUpdate', props: { page, contentKey: `PageUpdate${page.id}` } })
	}

	return (
		<TreeNode
			hasChildren={hasChildren}
			buttonComponent={
				<Button variant='outlined' onClick={openUpdateForm}>
					{page.name}
				</Button>
			}
		>
			{children.map(i => (
				<PageNode page={i} siteId={siteId} />
			))}
		</TreeNode>
	)
}

export default PageNode
