import React from 'react'

export interface DefaultButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean
}

export interface BurgerButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean
}
