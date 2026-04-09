import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material'

type textInputProps = {
	name: string
	label: string
	value?: string
	isDisabled?: boolean
	required?: boolean
	helperText?: string
	errorText?: string
	onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputStandart = ({ name, label, value, isDisabled, required, helperText, errorText, onInput }: textInputProps) => (
	<FormControl variant='standard' required={required} error={!!errorText}>
		<InputLabel htmlFor={name}>{label}</InputLabel>
		<Input name={name} id={name} value={value} disabled={isDisabled} onInput={onInput} />
		<FormHelperText id={name}>{errorText || helperText}</FormHelperText>
	</FormControl>
)

export default InputStandart
