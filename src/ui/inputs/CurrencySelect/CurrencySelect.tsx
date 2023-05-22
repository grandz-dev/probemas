import React from 'react'
import Select, { components, OptionProps, SingleValueProps } from 'react-select'
import { currencyList, getCurrencyFlag } from '@/mockData.ts'
import { Currency, useCurrency } from '@/context/CurrencyContext.tsx'
import { CurrencySelectProps, OptionInterface } from '@/ui/inputs/CurrencySelect/types.ts'

import './CurrencySelect.scss'

const Option = (props: OptionProps<OptionInterface>) => {
	const { Option } = components
	return (
		<Option {...props}>
			<img src={getCurrencyFlag(props.label)} alt={props.label} />
			<span>{props.label}</span>
		</Option>
	)
}

const SingleValue = (props: SingleValueProps<OptionInterface>) => {
	const { SingleValue } = components
	return (
		<SingleValue {...props}>
			<img src={getCurrencyFlag(props.data.label)} alt={props.data.label} />
			<span>{props.data.label}</span>
		</SingleValue>
	)
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ className }) => {
	const { activeCurrency, setActiveCurrency } = useCurrency()
	return (
		<Select
			value={activeCurrency}
			options={currencyList}
			onChange={option => {
				setActiveCurrency(option as Currency)
			}}
			isSearchable={false}
			components={{ Option, SingleValue }}
			className={className}
			classNamePrefix={className}
		/>
	)
}

export default CurrencySelect
