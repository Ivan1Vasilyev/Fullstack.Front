import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { providerUpdateProps } from './provider/provider-update'
import { siteUpdateProps } from './site/site-update'
import { siteCreateProps } from './site/site-create'
import { pageCreateProps } from './page/page-create'
import { pageUpdateProps } from './page/page-update'

export type workspaceBlockNames = 'SiteCreate' | 'SiteUpdate' | 'ProviderUpdate' | 'ProviderCreate' | 'PageCreate' | 'PageUpdate'

type workspaceBlockPropsBase = { contentKey: number | string }
type contentBlockProps = workspaceBlockPropsBase & (providerUpdateProps | siteUpdateProps | siteCreateProps | pageCreateProps | pageUpdateProps | {})

export type workspaceBlockMap = {
	ProviderUpdate: providerUpdateProps
	ProviderCreate: {}
	SiteUpdate: siteUpdateProps
	SiteCreate: siteCreateProps
	PageCreate: pageCreateProps
	PageUpdate: pageUpdateProps
}

export type workspacePropsByKey = {
	key: workspaceBlockNames | null
	props: contentBlockProps | null
}

const ProviderUpdate = dynamic<providerUpdateProps>(() => import('./provider/provider-update'))
const SiteUpdate = dynamic<siteUpdateProps>(() => import('./site/site-update'))
const ProviderCreate = dynamic(() => import('./provider/provider-create'))
const SiteCreate = dynamic<siteCreateProps>(() => import('./site/site-create'))
const PageCreate = dynamic<pageCreateProps>(() => import('./page/page-create'))
const PageUpdate = dynamic<pageUpdateProps>(() => import('./page/page-update'))

export const workspaceBlocksRegistry: { [K in workspaceBlockNames]: ComponentType<workspaceBlockMap[K]> } = {
	ProviderUpdate,
	SiteUpdate,
	ProviderCreate,
	SiteCreate,
	PageCreate,
	PageUpdate
} as const
