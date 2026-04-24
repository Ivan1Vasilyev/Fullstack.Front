'use client'

import { tProvider } from '@frontend/common'
import Dashboard from '@/components/common/dashboard/dashboard'
import Workspace from './workspace/workspace'
import Tree from './tree/tree'
import { useWorkspace } from '@/store/workspace-store'

const Content = ({ providers }: { providers: tProvider[] }) => {
	const { props } = useWorkspace()

	return <Dashboard leftSide={<Tree providers={providers} />}>{<Workspace key={props?.contentKey} />}</Dashboard>
}
export default Content
