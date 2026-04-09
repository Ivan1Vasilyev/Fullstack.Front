import { Button } from '@mui/material'
import TreeNode from '../tree-node'
import { ISiteModel } from '@/signals/sites/site-model'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import { useSignal, useSignals } from '@preact/signals-react/runtime'
import pagesService from '@/lib/services/pages-service/pages-service'
import { memo } from 'react'
import { IPageContext } from '@frontend/common'
import PageNode from '../page/page-node'

const SiteNode = ({ site }: { site: ISiteModel }) => {
	useSignals()

	const hasMainPage = useSignal<boolean>(false)
	const mainPage = useSignal<IPageContext | null>(null)

	if (site.mainPage.value === null) {
		pagesService.getMainPage(site.model.value.id).then(page => {
			mainPage.value = page
			hasMainPage.value = true
		})
	}

	const openCallback = () => {
		if (site.mainPage.value === null && mainPage.value !== null) {
			site.setMainPage(mainPage.value)
		}
	}

	const openUpdateForm = () => {
		WorkspacePropsByKey.value = { key: 'SiteUpdate', props: { site, hasMainPage, contentKey: `SiteUpdate${site.model.value.id}` } }
	}

	return (
		<TreeNode
			hasChildren={hasMainPage}
			openCallback={openCallback}
			buttonComponent={
				<Button variant='outlined' onClick={openUpdateForm}>
					{site.model.value.domainName}
				</Button>
			}
		>
			{site.mainPage.value && <PageNode page={site.mainPage.value} siteId={site.model.value.id} />}
		</TreeNode>
	)
}

export default memo(SiteNode)
