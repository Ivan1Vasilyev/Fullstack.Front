import Header from '@/components/common/header/header'
import MainPage from '@/components/pages/main'
import { MtsBlockNamesEnum } from '@/renders/block-register'
import RenderBlocks from '@/renders/render-blocks'
import { BlockNamesEnum, cityModel, IBlock, IBlockProps, IContentItem, IHeaderBlock, iPage, pages, Orderable } from '@frontend/common'

export const revalidate = 3600 // ISR вместо полной статики

export async function generateStaticParams() {
	return pages().map(i => ({ slug: i.url.split('/').filter(Boolean) }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug = [] } = await params

	const cities = {
		moskva: { cityName: 'Москва', frontCode: '', domainCode: 'moskva', phoneLink: '84994904580', phoneLabel: '+7 (499) 490-45-80' } as cityModel,
		balashixa: { cityName: 'Балашиха', frontCode: '/balashixa', domainCode: 'balashixa', phoneLink: '84994904580', phoneLabel: '+7 (499) 490-45-80' } as cityModel,
		'sankt-peterburg': {
			cityName: 'Санкт-Петербург',
			frontCode: '/sankt-peterburg',
			domainCode: 'sankt-peterburg',
			phoneLink: '88005553535',
			phoneLabel: '8 (800) 555-35-35'
		} as cityModel
	} as Record<string, cityModel>

	const mockPages = pages()
	const firstSlug = slug[0]
	const isCity = firstSlug in cities

	const url = slug.slice(isCity ? 1 : 0).join('/')

	const currentPage = mockPages.find(i => i.url === url)

	const currentCity = cities[firstSlug] || cities.moskva

	const mainPageContent = [
		{
			blockName: BlockNamesEnum.tariffs,
			data: {
				cssClass: 'cssclass',
				tag: 'h1',
				title: 'Заголовок в тарифах',
				text: 'текст под заголовком тарифов',
				tariffs: [{ title: 'Риил+' }, { title: 'Дома хорошо' }, { title: 'Дома лучше' }]
			}
		},
		{
			blockName: BlockNamesEnum.title,
			data: { tag: 'h2', title: 'Заголовок в контенте', text: 'текст под заголовком' }
		},
		{
			blockName: MtsBlockNamesEnum.orderedTitle,
			data: new Orderable<IHeaderBlock>(
				{ tag: 'h3', title: 'Заказанный заголовок Москва', text: 'текст под заголовком' },
				{ balashixa: { tag: 'h3', title: 'Заказанный заголовок Балашихи' }, 'sankt-peterburg': { tag: 'h3', title: 'Заказанный заголовок Питера' } }
			)
		}
	] as IContentItem[]

	const json = JSON.stringify(mainPageContent)
	const mainPage = mockPages.find(i => i.name === 'Главная')
	if (mainPage) {
		mainPage.content = json
	}

	if (!currentPage || !currentCity) return 'error'

	return (
		<main>
			<MainPage mockPages={mockPages} currentPage={currentPage} currentCity={currentCity} />
			<RenderBlocks page={currentPage} city={currentCity} />
		</main>
	)
}
