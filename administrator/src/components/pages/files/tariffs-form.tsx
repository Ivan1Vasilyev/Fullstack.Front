'use client'

import Form from '@/components/common/form/form'
import FileInput from '@/components/common/input/file-input'
import SelectStandart from '@/components/common/input/select-standart'
import filesService from '@/lib/services/files-service/files-service'
import { tFileLoader } from '@/lib/services/files-service/i-files-service'
import { FormControlLabel, Checkbox, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

const TariffsForm = ({ loaders }: { loaders: tFileLoader[] }) => {
	const loadersAsOptions = loaders.map(i => ({ value: i.loaderName, label: i.loaderName }), {})
	const [file, setFile] = useState<File | null>(null)
	const [onlyView, setOnlyView] = useState(false)
	const [loader, setLoader] = useState('')

	const submitCallback = async () => {
		if (!file) return 'Нет файла'

		const formData = new FormData()
		formData.append('file', file)
		formData.append('onlyView', onlyView.toString())
		formData.append('loader', loader)

		const result = await filesService.load(formData)
		if (result.length) {
			console.log(result)
			return `Успех! Победа!`
		}

		return 'Ничего нет'
	}

	const selectHandler = (event: SelectChangeEvent) => {
		setLoader(event.target.value)
	}

	return (
		<Form title='Загрузка тарифов' formName='tariffs' submitCallback={submitCallback}>
			<FormControlLabel control={<Checkbox name='onlyView' onChange={e => setOnlyView(e.target.checked)} />} label='Только просмотр' />
			<SelectStandart label='Загрузчик' name='loader' options={loadersAsOptions} required onInput={selectHandler} />
			<FileInput onChange={e => setFile(e.target.files?.[0] || null)} />
		</Form>
	)
}

export default TariffsForm
