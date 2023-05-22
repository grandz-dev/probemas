import React from 'react'
import { DefaultButtonTypes } from '@/ui/buttons/types.ts'

import styles from './styles/DefaultButton.module.scss'

const DefaultButton: React.FC<DefaultButtonTypes> = ({ primary, className, ...buttonProps }) => {
	return (
		<button
			className={`${styles.button} ${primary ? styles.primary : styles.outline} ${className ?? ''}`}
			{...buttonProps}
		/>
	)
}

export default DefaultButton
