import Link from 'next/link'
import { Fragment } from 'react'
import Faq from '../common/faq/faq'
import { getCities, modalTypeEnum } from '@frontend/common'
import SimpleButton from '../buttons/simple/simple-button'
import ModalButton from '../buttons/modal/modal'
import { buttonColorEnum } from '../buttons/button-color-enum'
import { PROVIDER_ID } from '@/utils/constants'

const MainPage = async () => {
	const cities = await getCities(PROVIDER_ID)
	const city = cities[0]

	const text =
		'<p>Чтобы подключить интернет от МТС в вашем доме или квартире в Москве, {order[оставьте заявку]} на сайте или {phone[позвоните]} <span class="desk">позвоните</span> в наш контакт-центр по телефону<a type="audio/telephone-event" href="tel:84952600890" title="+7 (495) 260-08-90" class="desk"> +7 (495) 260-08-90</a>. Специалист свяжется с вами для уточнения деталей и согласования времени визита мастера.</p>'

	return (
		<>
			{cities.map((i: any) => (
				<Fragment key={i.domainCode}>
					<Link href={i.frontCode}>{i.cityName}</Link>
					<br></br>
				</Fragment>
			))}

			<section className='container block' style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
				<SimpleButton component={ModalButton} color={buttonColorEnum.red} modalType={modalTypeEnum.order}>
					Отправить заявку
				</SimpleButton>

				<SimpleButton component={Link} href={`tel:88005553535`} color={buttonColorEnum.black}>
					8-800-555-35-35
				</SimpleButton>
				<SimpleButton component={Link} href={`tel:${city.phoneLink}`} color={buttonColorEnum.gray100}>
					Позвонить
				</SimpleButton>
			</section>

			<section className='container'>
				<Faq text={text} city={cities[0]} />
			</section>
		</>
	)
}

export default MainPage
