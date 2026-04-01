import { FormControl, InputLabel, Input } from '@mui/material'

type inputStandartProps = {
	name: string
	label: string
	value?: string
	isDisabled?: boolean
}

const InputStandart = ({ name, label, value, isDisabled }: inputStandartProps) => (
	<FormControl variant='standard'>
		<InputLabel htmlFor={name}>{label}</InputLabel>
		<Input name={name} id={name} value={value} disabled={isDisabled} />
	</FormControl>
)

export default InputStandart
