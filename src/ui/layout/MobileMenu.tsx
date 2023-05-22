import React from 'react'
import { menuLinks } from '@/constants'
import { DefaultLink } from '@/ui/links'
import { DefaultButton } from '@/ui/buttons'
import { CurrencySelect } from '@/ui/inputs'

import styles from './styles/MobileMenu.module.scss'

interface MobileMenuProps {
	active: boolean
	closeMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, active }) => {
	const renderMenuLinks = () =>
		menuLinks.map(link => (
			<li key={link.to}>
				<DefaultLink onClick={closeMenu} className={styles.link} {...link} />
			</li>
		))

	return (
		<aside className={`container ${styles.menu} ${active ? styles.active : ''}`}>
			<ul>
				{renderMenuLinks()}
				<CurrencySelect className="currency-dropdown" />
			</ul>
			<div className={styles.buttons}>
				<DefaultButton>Sign Up</DefaultButton>
				<DefaultButton className="login" primary>
					Log In
				</DefaultButton>
			</div>
		</aside>
	)
}

export default MobileMenu
