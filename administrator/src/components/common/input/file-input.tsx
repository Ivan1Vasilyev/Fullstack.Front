'use client'

import { Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const FileInput = ({ buttonText = 'Выбрать файл', inputName = 'file' }: { buttonText?: string; inputName?: string }) => (
	<Button sx={{ width: 'auto' }} htmlFor={inputName} component='label' variant='contained' startIcon={<CloudUploadIcon />}>
		{buttonText}
		<input id={inputName} name={inputName} type='file' onChange={event => console.log(event.target.files)} style={{ display: 'none' }} />
	</Button>
)

export default FileInput
