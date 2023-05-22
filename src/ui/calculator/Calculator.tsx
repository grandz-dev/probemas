import React, { ChangeEventHandler, useMemo, useState } from 'react'
import { CalculatorProps } from '@/ui/calculator/types.ts'
import { DefaultInput } from '@/ui/inputs'
import { useCurrency } from '@/context/CurrencyContext.tsx'

import styles from './Calculator.module.scss'

const Calculator: React.FC<CalculatorProps> = ({ itemPrice }) => {
	const [amount, setAmount] = useState<number>()
	const { activeCurrency } = useCurrency()

	const changeAmountHandler: ChangeEventHandler<HTMLInputElement> = e => {
		if (!isNaN(Number(e.target.value))) {
			setAmount(Number(e.target.value))
		}
		if (e.target.value === undefined) {
			setAmount(undefined)
		}
	}

	// {amount} * {currency_rate * itemPrice} == {price}
	const result = useMemo(() => {
		if (amount) {
			return amount * (Number(activeCurrency.value) * itemPrice)
		} else {
			return 0
		}
	}, [amount, activeCurrency.value, itemPrice])

	return (
		<div className={styles.calculator}>
			<DefaultInput label="Amount" name="amount" onChange={changeAmountHandler} value={amount} />
			<DefaultInput
				disabled
				label={`ItemPrice: ${itemPrice}; Rate: ${activeCurrency.value}`}
				name="price"
				value={activeCurrency.label + ': ' + result}
			/>
		</div>
	)
}

export default Calculator
