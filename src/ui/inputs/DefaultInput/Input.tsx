import React from 'react'
import { DefaultInputProps } from './types'
import styles from './Input.module.scss'

const Input: React.FC<DefaultInputProps> = ({ className, name, label, disabled, ...props }) => {
	return (
		<label className={`${className ?? ''} ${disabled ? styles.disabled : ''}`}>
			{label && <span className={styles.label}>{label}</span>}
			<input className={styles.input} name={name} disabled={disabled} {...props} />
		</label>
	)
}
export default Input
