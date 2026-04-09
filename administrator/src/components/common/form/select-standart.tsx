import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'

type selectInputProps = {
	name: string
	label: string
	options: Record<string | number, string | number>
	value?: string
	isDisabled?: boolean
	required?: boolean
	helperText?: string
	errorText?: string
	withNone?: boolean
	onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectStandart = ({ name, label, options, value, isDisabled, required, helperText, errorText, withNone, onInput }: selectInputProps) => (
	<FormControl sx={{ m: 1, minWidth: 120 }} required={required} error={!!errorText} disabled={isDisabled}>
		<InputLabel id={name + label}>{label}</InputLabel>
		<Select labelId={name + label} id={name} value={value} label={label} onInput={onInput}>
			{withNone && (
				<MenuItem value=''>
					<em>None</em>
				</MenuItem>
			)}

			{Object.entries(options).map(i => (
				<MenuItem key={i[0]} value={i[0]}>
					{i[1]}
				</MenuItem>
			))}
		</Select>
		<FormHelperText>{errorText || helperText}</FormHelperText>
	</FormControl>
)

export default SelectStandart
