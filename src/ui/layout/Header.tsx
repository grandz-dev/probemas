import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { menuLinks, Path } from '@/constants'

import { Logo } from '@/ui/icons'
import { DefaultLink } from '@/ui/links'
import { BurgerButton, DefaultButton } from '@/ui/buttons'
import { CurrencySelect } from '@/ui/inputs'
import MobileMenu from '@/ui/layout/MobileMenu.tsx'

import styles from './styles/Header.module.scss'

const Header: React.FC = () => {
	const [activeMenu, setActiveMenu] = useState(false)
	const toggleMenu = () => setActiveMenu(prev => !prev)
	const closeMenu = () => setActiveMenu(false)

	const renderMenuLinks = () =>
		menuLinks.map(link => (
			<li key={link.to}>
				<DefaultLink {...link} />
			</li>
		))

	return (
		<header className={styles.header}>
			<div className={`container ${styles.wrapper ?? ''}`}>
				<div className={styles.burger}>
					<BurgerButton active={activeMenu} onClick={toggleMenu} />
				</div>
				<NavLink className={styles.logo} to={Path.index} children={<Logo />} />
				<ul className={styles.links}>{renderMenuLinks()}</ul>
				<div className={styles.buttons}>
					<CurrencySelect className="currency-select" />
					<DefaultButton>Sign Up</DefaultButton>
					<DefaultButton className="login" primary>
						Log In
					</DefaultButton>
				</div>
			</div>
			<MobileMenu active={activeMenu} closeMenu={closeMenu} />
		</header>
	)
}

export default Header
