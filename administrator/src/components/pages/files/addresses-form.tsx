'use client'

import Form from '@/components/common/form/form'
import FileInput from '@/components/common/input/file-input'
import SelectStandart from '@/components/common/input/select-standart'
import { FormControlLabel, Checkbox } from '@mui/material'

const AddressesForm = () => {
	const submitCallback = async (data: unknown) => {
		console.log(data)
		return '!!!'
	}

	return (
		<Form title='Загрузка адресов' formName='addresses' submitCallback={submitCallback}>
			<FormControlLabel control={<Checkbox name='viewOnly' />} label='Только просмотр' />
			<SelectStandart
				label='Загрузчик'
				name='loaderType'
				options={[
					{ value: 'mtsMo', label: 'МТС - Москва' },
					{ value: 'mtsRussia', label: 'МТС - Россия' }
				]}
				required
			/>
			{/* <FileInput /> */}
		</Form>
	)
}

export default AddressesForm
