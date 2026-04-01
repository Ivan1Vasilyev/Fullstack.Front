import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { providerUpdateProps } from './provider/provider-update'
import { siteUpdateProps } from './site/site-update'
import { siteCreateProps } from './site/site-create'

export type workspaceBlockNames = 'SiteCreate' | 'SiteUpdate' | 'ProviderUpdate' | 'ProviderCreate'

type workspaceBlockPropsBase = { contentKey: number | string }
type contentBlockProps = workspaceBlockPropsBase & (providerUpdateProps | siteUpdateProps | siteCreateProps | {})

export type workspaceBlockMap = {
	ProviderUpdate: providerUpdateProps
	ProviderCreate: {}
	SiteUpdate: siteUpdateProps
	SiteCreate: siteCreateProps
}

export type workspacePropsByKey = {
	key: workspaceBlockNames | null
	props: contentBlockProps | null
}

const ProviderUpdate = dynamic<providerUpdateProps>(() => import('./provider/provider-update'))
const SiteUpdate = dynamic<siteUpdateProps>(() => import('./site/site-update'))
const ProviderCreate = dynamic(() => import('./provider/provider-create'))
const SiteCreate = dynamic<siteCreateProps>(() => import('./site/site-create'))

export const workspaceBlocksRegistry: { [K in workspaceBlockNames]: ComponentType<workspaceBlockMap[K]> } = {
	ProviderUpdate,
	SiteUpdate,
	ProviderCreate,
	SiteCreate
} as const
