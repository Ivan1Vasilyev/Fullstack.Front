import { workspacePropsByKey } from '@/components/pages/content/workspace/content-block-registry'
import { create } from 'zustand'

export const useWorkspace = create<workspacePropsByKey>(set => ({
	key: null,
	props: null
}))
