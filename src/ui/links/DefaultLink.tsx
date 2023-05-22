import React from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

import styles from './DefaultLink.module.scss'

const DefaultLink: React.FC<LinkProps> = ({ className, ...linkProps }) => {
	return (
		<NavLink
			className={({ isActive }) => {
				return `${className ?? ''} ${styles.link} ${isActive ? styles.active : ''}`
			}}
			{...linkProps}
		/>
	)
}

export default DefaultLink
