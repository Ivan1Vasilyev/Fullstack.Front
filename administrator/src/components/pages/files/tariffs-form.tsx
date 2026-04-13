'use client'

import Form from '@/components/common/form/form'
import FileInput from '@/components/common/input/file-input'
import SelectStandart from '@/components/common/input/select-standart'
import { FormControlLabel, Checkbox } from '@mui/material'
import { useSignal } from '@preact/signals-react'

const TariffsForm = () => {
	const successMessage = useSignal<string>('')
	const submitCallback = async (data: unknown) => {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				successMessage.value = `Успех`
				resolve('')
			}, 2000)
		})
		console.log(data)
	}

	return (
		<Form title='Загрузка тарифов' formName='tariffs' successMessage={successMessage} submitCallback={submitCallback}>
			<FormControlLabel control={<Checkbox name='viewOnly' />} label='Только просмотр' />
			<SelectStandart label='Загрузчик' name='loaderType' options={{ mtsMo: 'МТС - Москва', mtsRussia: 'МТС - Россия' }} />
			<FileInput />
		</Form>
	)
}

export default TariffsForm
