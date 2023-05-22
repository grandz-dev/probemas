export const currencyList = [
	{ value: '1', label: 'USD' },
	{ value: '1.1', label: 'EUR' },
	{ value: '1.2', label: 'GBP' },
	{ value: '1.3', label: 'AUD' },
	{ value: '1.4', label: 'CAD' },
]

export const getCurrencyFlag = (currency: string) => {
	switch (currency) {
		case 'USD':
			return '../flags/USD.svg'
		case 'EUR':
			return '../flags/EUR.svg'
		case 'GBP':
			return '../flags/GBP.svg'
		case 'AUD':
			return '../flags/AUD.svg'
		case 'CAD':
			return '../flags/CAD.svg'
		default:
			return '../flags/unknown.svg'
	}
}
