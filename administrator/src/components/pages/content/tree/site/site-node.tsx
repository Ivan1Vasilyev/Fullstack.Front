import { Button } from '@mui/material'
import TreeNode from '../tree-node'
import pagesService from '@/lib/services/pages-service/pages-service'
import { memo, useState } from 'react'
import { IPageContext, tSite } from '@frontend/common'
import PageNode from '../page/page-node'
import { useWorkspace } from '@/store/workspace-store'

const SiteNode = ({ site }: { site: tSite }) => {
	const [hasChildren, setHasChildren] = useState<boolean>(false)
	const [mainPage, setMainPage] = useState<IPageContext | null>(null)

	if (mainPage === null) {
		pagesService.getMainPage(site.id).then(page => {
			if (page) {
				setMainPage(page)
				setHasChildren(true)
			}
		})
	}

	const openUpdateForm = () => {
		useWorkspace.setState({ key: 'SiteUpdate', props: { site, hasMainPage: hasChildren, contentKey: `SiteUpdate${site.id}` } })
	}

	return (
		<TreeNode
			hasChildren={hasChildren}
			buttonComponent={
				<Button variant='outlined' onClick={openUpdateForm}>
					{site.domainName}
				</Button>
			}
		>
			{/* <PageNode page={mainPage} siteId={site.id} /> */}
			<div></div>
		</TreeNode>
	)
}

export default memo(SiteNode)
