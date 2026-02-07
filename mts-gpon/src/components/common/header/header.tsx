import Link from 'next/link'

import styles from './header.module.scss'
import LogoSvg from '@/components/svg/logo'
import LogoMobSvg from '@/components/svg/logo-mob'
import HeaderCitySvg from '@/components/svg/header-city'
import HeaderMenuSvg from '@/components/svg/header-menu'
import HeaderPhoneMobSvg from '@/components/svg/header-phone-mob'
import HeaderMenuMobSvg from '@/components/svg/header-menu-mob'
import HeaderPhoneSvg from '@/components/svg/header-phone'
import HeaderMenuCloseSvg from '@/components/svg/header-menu-close'
import ModalToggleButton from '@/components/buttons/modal/modal-toggle'
import { modalTypeEnum } from '@frontend/common'
import { getCity } from '@frontend/common'
import ModalButton from '@/components/buttons/modal/modal'
import { buttonColorEnum } from '@/components/buttons/button-color-enum'

const Header = async ({ city }: { city?: string }) => {
	const cityData = await getCity(city)
	const mainPageUrl = cityData?.frontCode ?? ''

	return (
		<>
			<div className={styles.placeholder}></div>
			<header className={styles.wrap} itemScope itemType='https://schema.org/WPHeader'>
				<div className={`${styles.header} container`} itemScope itemType='https://schema.org/Organization'>
					<meta itemProp='name' content='МТС' />
					<Link className={styles.logo} href={mainPageUrl} itemProp='url' aria-label='Главная'>
						<LogoSvg />
						<LogoMobSvg />
					</Link>

					<ModalToggleButton className={`${styles.button} ${styles.city}`} activeClass={styles.active} modalType={modalTypeEnum.cities} aria-label='выбрать город'>
						<HeaderCitySvg />
						<span className={styles.text}>{cityData?.cityName}</span>
					</ModalToggleButton>

					<ModalToggleButton
						className={`${styles.button} ${styles.menu} ${styles[buttonColorEnum.red]} desk`}
						activeClass={styles.active}
						modalType={modalTypeEnum.menu}
						aria-label='Список страниц'
					>
						<HeaderMenuCloseSvg className={styles.close} />
						<HeaderMenuSvg className={styles.open} />
						<span>Меню</span>
					</ModalToggleButton>
					<div className={styles.right}>
						<ModalButton className={`mob`} modalType={modalTypeEnum.phones} aria-label='Позвонить'>
							<HeaderPhoneMobSvg />
						</ModalButton>
						<ModalButton className={`mob`} modalType={modalTypeEnum.menu} aria-label='Список страниц'>
							<HeaderMenuMobSvg />
						</ModalButton>
						<ModalToggleButton
							className={`${styles[buttonColorEnum.gray100]} desk ${styles.button}`}
							activeClass={styles.active}
							modalType={modalTypeEnum.support}
							itemScope
							itemProp='contactPoint'
							itemType='http://schema.org/ContactPoint'
						>
							<HeaderPhoneSvg /> <span itemProp='name'>Контакты</span>
						</ModalToggleButton>
						<ModalToggleButton
							className={`${styles[buttonColorEnum.black]} ${styles.button} desk`}
							activeClass={styles.active}
							modalType={modalTypeEnum.order}
							itemScope
							itemProp='contactPoint'
							itemType='http://schema.org/ContactPoint'
							aria-label='Отправить заявку'
						>
							<span itemProp='name'>Подключить МТС</span>
						</ModalToggleButton>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
