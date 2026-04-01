import { workspacePropsByKey } from '@/components/pages/content/workspace/content-block-registry'
import { signal } from '@preact/signals-react'

export const WorkspacePropsByKey = signal<workspacePropsByKey>({ key: null, props: null })
