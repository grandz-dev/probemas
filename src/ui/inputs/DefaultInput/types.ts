import React from 'react'

export interface DefaultInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string
	label?: string
	className?: string
}
