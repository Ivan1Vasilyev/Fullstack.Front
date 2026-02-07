'use client'
import { Button } from '@mui/material'

const TestComp = () => (
	<div>
		<Button variant='contained' disabled>
			inline
		</Button>
		<Button variant='contained' loading={true}>
			full
		</Button>
		<Button variant='contained'>transparent</Button>
	</div>
)

export default TestComp
