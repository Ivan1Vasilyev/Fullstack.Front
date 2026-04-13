import Form from '@/components/common/form/form'
import InputStandart from '@/components/common/input/input-standart'
import SelectStandart from '@/components/common/input/select-standart'
import { CustomTabPanel, tabProps } from '@/components/common/tabs/tabs'
import { createPageArgs } from '@/lib/services/pages-service/pages-arguments'
import pagesService from '@/lib/services/pages-service/pages-service'
import { IPageContext } from '@frontend/common'
import { Box, Tab, Tabs } from '@mui/material'
import { useSignal } from '@preact/signals-react'
import { useState } from 'react'

export type pageCreateProps = { siteId: number; parentId: number | null; onSubmit: (page: IPageContext) => void }

const PageCreate = ({ siteId, parentId, onSubmit }: pageCreateProps) => {
	const successMessage = useSignal<string>('')
	const [value, setValue] = useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const submitCallback = async (data: unknown) => {
		const createdPage = await pagesService.create(data as createPageArgs)
		onSubmit(createdPage)
		successMessage.value = `Страница создана: ${createdPage.name}`
	}
	return (
		<Form title={`Новая страница`} formName='page-create' submitCallback={submitCallback} successMessage={successMessage}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='Базовое' {...tabProps(0)} />
					<Tab label='Мета' {...tabProps(1)} />
				</Tabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				<InputStandart name='name' label='Имя' required />
				{parentId ? (
					<>
						<InputStandart name='url' label='URL' helperText='полный путь от корня сайта' required />
						<SelectStandart
							name='type'
							label='Тип страницы'
							value=''
							options={{ standart: 'Стандартная', common: 'Общая' }}
							helperText='Стандартная - размножаемая страница, Общая - 1 на все города'
							required
						/>
					</>
				) : (
					<>
						<input type='hidden' name='type' value='standart' />
						<input type='hidden' name='url' value='' />
					</>
				)}
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<Box sx={{ display: 'grid', gap: '10px' }}>
					<InputStandart name='title' label='Title' />
					<InputStandart name='description' label='Description' />
				</Box>
			</CustomTabPanel>

			<input type='hidden' name='siteId' value={siteId} />
			<input type='hidden' name='providerId' value={parentId ?? ''} />
		</Form>
	)
}

export default PageCreate
