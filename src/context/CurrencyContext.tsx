import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import { currencyList } from '@/mockData.ts'

export interface Currency {
	value: string
	label: string
}

interface CurrencyContextInterface {
	activeCurrency: Currency
	setActiveCurrency: (currency: Currency) => void
}

export const CurrencyContext = createContext<CurrencyContextInterface | null>(null)

export const useCurrency = () => {
	const store = useContext(CurrencyContext)

	if (!store) {
		throw new Error('Can not `useCurrency` outside of the `Provider`')
	}

	return store
}

const CurrencyProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [activeCurrency, setActiveCurrency] = useState<Currency>(currencyList[0])

	return (
		<CurrencyContext.Provider
			value={{
				activeCurrency,
				setActiveCurrency,
			}}
		>
			{children}
		</CurrencyContext.Provider>
	)
}

export default CurrencyProvider
