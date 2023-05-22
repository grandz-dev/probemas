import React from 'react'

import styles from './styles/BurgerButton.module.scss'
import { BurgerButtonTypes } from '@/ui/buttons/types.ts'

const BurgerButton: React.FC<BurgerButtonTypes> = ({
	active = false,
	className,
	...buttonProps
}) => {
	return (
		<button
			className={`${styles.burger} ${active ? styles.active : ''} ${className ?? ''}`}
			{...buttonProps}
		>
			<span />
			<span />
			<span />
		</button>
	)
}

export default BurgerButton
