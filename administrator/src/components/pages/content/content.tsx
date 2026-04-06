'use client'

import { tProvider } from '@frontend/common'
import Dashboard from '@/components/common/dashboard/dashboard'
import { use } from 'react'
import Workspace from './workspace/workspace'
import Tree from './tree/tree'
import { providerList } from '@/signals/providers/provider-list'
import { WorkspacePropsByKey } from '@/signals/content-page/workspace-model'
import { useSignals } from '@preact/signals-react/runtime'
import { headerBlock } from '@/lib/content/models'

export default function Content({ providersPromise }: { providersPromise: Promise<tProvider[]> }) {
	useSignals()
	console.log(headerBlock)
	const initialProviders = use(providersPromise)

	if (providerList.items.value.length === 0) {
		providerList.set(initialProviders)
	}

	return <Dashboard leftSide={<Tree />}>{<Workspace key={WorkspacePropsByKey.value.props?.contentKey} />}</Dashboard>
}
