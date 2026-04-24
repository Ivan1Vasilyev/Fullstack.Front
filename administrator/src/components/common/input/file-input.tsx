'use client'

import { Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { ChangeEvent, useState } from 'react'

const FileInput = ({
	buttonText = 'Выбрать файл',
	inputName = 'file',
	onChange
}: {
	buttonText?: string
	inputName?: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
	const [text, setText] = useState<string>(buttonText)

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e)

		if (e.target.files?.length) {
			setText(e.target.files[0].name)
		} else {
			setText(buttonText)
		}
	}

	return (
		<Button sx={{ width: 'auto' }} htmlFor={inputName} component='label' variant='outlined' startIcon={<CloudUploadIcon />}>
			{text}
			<input id={inputName} name={inputName} type='file' onChange={changeHandler} style={{ display: 'none' }} />
		</Button>
	)
}

export default FileInput
