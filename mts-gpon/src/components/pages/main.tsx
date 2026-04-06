import Link from 'next/link'
import { Fragment } from 'react'
import Faq from '../common/faq/faq'
import { cityModel, getCities, mockPage, modalTypeEnum, pages, sanitizeHtml } from '@frontend/common'
import SimpleButton from '../buttons/simple/simple-button'
import ModalButton from '../buttons/modal/modal'
import { buttonColorEnum } from '../buttons/button-color-enum'
import { PROVIDER_ID } from '@/utils/constants'

const MainPage = async ({ mockPages, currentPage, currentCity }: { mockPages: mockPage[]; currentPage: mockPage | undefined; currentCity: cityModel | undefined }) => {
	// const cities = await getCities(PROVIDER_ID)

	const cities = [
		{ cityName: 'Балашиха', frontCode: '/balashixa', domainCode: 'balashixa', phoneLink: '84994904580', phoneLabel: '+7 (499) 490-45-80' },
		{ cityName: 'Санкт-Петербург', frontCode: '/sankt-peterburg', domainCode: 'sankt-peterburg', phoneLink: '88005553535', phoneLabel: '8 (800) 555-35-35' },
		{ cityName: 'Москва', frontCode: '/', domainCode: 'moskva', phoneLink: '84994904580', phoneLabel: '+7 (499) 490-45-80' }
	] as cityModel[]

	const text = await sanitizeHtml(
		'<p>Чтобы подключить интернет от МТС в вашем доме или квартире в Москве, {order[оставьте заявку]} на сайте или {phone[позвоните]} <span class="desk">позвоните</span> в наш контакт-центр по телефону <span class="desk">{phone}</span>. Специалист свяжется с вами для уточнения деталей и согласования времени визита мастера.</p>'
	)

	return (
		<>
			{cities.map((i: any) => (
				<Fragment key={i.domainCode}>
					<Link href={i.frontCode}>{i.cityName}</Link>
					<br></br>
				</Fragment>
			))}

			<h1>{`Текущая страница: ${currentPage?.name}`}</h1>
			<h2>{`Текущий город: ${currentCity?.cityName}`}</h2>
			<br></br>
			<section className='container block' style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
				<SimpleButton component={ModalButton} color={buttonColorEnum.red} modalType={modalTypeEnum.order}>
					Отправить заявку
				</SimpleButton>

				<SimpleButton component={Link} href={`tel:${currentCity?.phoneLink}`} color={buttonColorEnum.black}>
					{currentCity?.phoneLabel}
				</SimpleButton>
				<SimpleButton component={Link} href={`tel:${currentCity?.phoneLink}`} color={buttonColorEnum.gray100}>
					Позвонить
				</SimpleButton>
			</section>

			<section className='container'>
				<Faq text={text} city={currentCity ?? cities[0]} />
			</section>

			{mockPages.map(p => (
				<Link key={p.url} href={`${currentCity?.frontCode ?? ''}/${p.url}`}>
					{p.name}
				</Link>
			))}
		</>
	)
}

export default MainPage
