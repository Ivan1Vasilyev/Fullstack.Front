import { FormControl, InputLabel, MenuItem, FormHelperText, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

type selectInputProps = {
	name: string
	label: string
	options: { value: string | number; label: string | number }[]
	value?: string
	isDisabled?: boolean
	required?: boolean
	helperText?: string
	errorText?: string
	withNone?: boolean
	onInput?: (event: SelectChangeEvent) => void
}

const SelectStandart = ({ name, label, options, value = '', isDisabled, required, helperText, errorText, withNone, onInput }: selectInputProps) => {
	const [selectValue, setSelectValue] = useState<string>('')

	const inputHandler = (event: SelectChangeEvent) => {
		if (onInput) {
			onInput(event)
		}

		setSelectValue(event.target.value)
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} required={required} error={!!errorText} disabled={isDisabled}>
			<InputLabel id={name + label}>{label}</InputLabel>
			<Select labelId={name + label} id={name} name={name} value={selectValue} label={label} onChange={inputHandler}>
				{withNone && (
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
				)}

				{options.map(i => (
					<MenuItem key={i.value} value={i.value}>
						{i.label}
					</MenuItem>
				))}
			</Select>
			<FormHelperText>{errorText || helperText}</FormHelperText>
		</FormControl>
	)
}

export default SelectStandart
