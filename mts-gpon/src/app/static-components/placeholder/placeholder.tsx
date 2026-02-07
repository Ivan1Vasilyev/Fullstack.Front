import { JSX, ReactNode } from 'react'
import Link from 'next/link'
import ModalButton from '@/components/buttons/modal/modal'
import React from 'react'
import { cityModel, modalTypeEnum } from '@frontend/common'
import InlineButton from '@/components/buttons/inline/inline-button'
import SimpleButton from '@/components/buttons/simple/simple-button'
import { buttonColorEnum } from '@/components/buttons/button-color-enum'

/*
{order[отображаемый текст]} - инлайн-кнопка синего цвета с текстом из [], открывает попап с формой заявки.

{link[название страницы|отображаемый текст]} - инлайн ссылка синего цвета. В "[]" с разделителем "|" слева название страницы (IPublishedContent.Name), справа - отображаемый текст. Если указано только имя страницы, оно же отобразится текстом.
Пример: {link[Все тарифы|Тарифы от МТС]}

{button-link[название страницы|отображаемый текст]} - блочная чёрная кнопка с ссылкой на страницу. От {link[...]} отличается только тем, что должен быть в своей отдельной строке.

{phone[отображаемый текст]} - инлайн ссылка синего цвета на номер телефона с текстом из [].
{city} - название города в именительном падеже
{phone} - инлайн ссылка синего цвета на номер телефона, текст - номер телефна.
{support} - блок с QR-кодом и ссылками на приложения. Должен быть в своей отдельной строке.
*/

enum pagesUrlByNameKeys {
	main = 'Главная',
	allTariffs = 'Все тарифы',
}

type pageUrlByNameType = Record<pagesUrlByNameKeys, string>

const isPagesKey = (key: string): key is pagesUrlByNameKeys => key in pagesUrlByNameKeys

const pagesUrlByName: pageUrlByNameType = {
	[pagesUrlByNameKeys.main]: '',
	[pagesUrlByNameKeys.allTariffs]: '/tariffs',
}

const Placeholders = ({ text, city }: { text: string; city: cityModel }) => {
	return parseHTMLWithPlaceholders(text, city)
}

export default Placeholders

const replacePlaceHolder = (source: string, city: cityModel): JSX.Element | null => {
	const splittedSource = source.replace(']', '').split('[')

	const key = splittedSource[0]
	const text = splittedSource[1]
	switch (key) {
		case 'order':
			return (
				<InlineButton component={ModalButton} modalType={modalTypeEnum.order}>
					{text}
				</InlineButton>
			)

		case 'city':
			return <>{city.cityName}</>

		case 'city-button':
			return <ModalButton modalType={modalTypeEnum.cities}>{text}</ModalButton>

		case 'phone':
			return (
				<InlineButton component={Link} href={`tel:${city.phoneLink}`} data-calltracking={true}>
					{text || city.phoneLabel}
				</InlineButton>
			)

		case 'button-phone':
			return (
				<SimpleButton component={Link} href={`tel:${city.phoneLink}`} color={buttonColorEnum.black}>
					{text || city.phoneLabel}
				</SimpleButton>
			)

		case 'link': {
			const linkData = getLinkData(text, city)
			return linkData ? <Link href={linkData.link}>{linkData.label}</Link> : null
		}

		case 'button-link': {
			const linkData = getLinkData(text, city)
			return linkData ? <Link href={linkData.link}>{linkData.label}</Link> : null
		}

		// case 'tariffs':
		// 	return <TariffList/>
	}

	return null
}

const getLinkData = (text: string, city: cityModel): { link: string; label: string } | null => {
	const splittedText = text.split('|')
	const key = splittedText[0]
	if (isPagesKey(key)) {
		return {
			link: `${city.frontCode}${pagesUrlByName[key]}`,
			label: splittedText[1] || key,
		}
	}

	return null
}

const parseHTMLWithPlaceholders = (text: string, city: cityModel, indexRef: { current: number } = { current: 0 }): ReactNode[] => {
	const nodes: ReactNode[] = []
	let pos = 0

	while (pos < text.length) {
		// Ищем следующий тег или плейсхолдер
		const nextLT = text.indexOf('<', pos)
		const nextBrace = text.indexOf('{', pos)

		// Определяем, что встретилось раньше
		if (nextLT === -1 && nextBrace === -1) {
			// Остался только текст
			nodes.push(text.substring(pos))
			break
		}

		const nextPos = Math.min(nextLT === -1 ? Infinity : nextLT, nextBrace === -1 ? Infinity : nextBrace)

		// Добавляем текст до найденного элемента
		if (nextPos > pos) {
			nodes.push(text.substring(pos, nextPos))
		}

		if (nextPos === nextLT && nextLT !== -1) {
			// Найден HTML тегсв
			const tagMatch = text.substring(nextLT).match(/^<(\/?)(\w+)([^>]*?)(\/?)>/)
			if (tagMatch) {
				const [fullMatch, isClosing, tagName, attributesStr, isSelfClosing] = tagMatch

				if (isClosing) {
					// Закрывающий тег - просто пропускаем
					pos = nextLT + fullMatch.length
					continue
				}

				// Парсим атрибуты
				const attributes: Record<string, string> = {}
				const attrRegex = /(\w+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/g
				let attrMatch
				while ((attrMatch = attrRegex.exec(attributesStr)) !== null) {
					const name = attrMatch[1]
					const value = attrMatch[2] || attrMatch[3] || attrMatch[4] || ''
					attributes[name] = value
				}

				const reactProps = htmlToReactAttributes(attributes)

				if (isSelfClosing) {
					// Самозакрывающийся тег
					const Element = tagName as keyof JSX.IntrinsicElements

					nodes.push(
						React.createElement(Element, {
							key: `${indexRef.current++}`,
							...reactProps,
						})
					)
					pos = nextLT + fullMatch.length
				} else {
					// Находим закрывающий тег
					const closeTag = `</${tagName}>`
					let closePos = text.indexOf(closeTag, nextLT + fullMatch.length)

					if (closePos !== -1) {
						const content = text.substring(nextLT + fullMatch.length, closePos)
						const children = parseHTMLWithPlaceholders(content, city, indexRef)

						const Element = tagName as keyof JSX.IntrinsicElements

						nodes.push(
							React.createElement(
								Element,
								{
									key: `${indexRef.current++}`,
									...reactProps,
								},
								...children
							)
						)

						pos = closePos + closeTag.length
					} else {
						// Нет закрывающего тега - обрабатываем как самозакрывающийся
						const Element = tagName as keyof JSX.IntrinsicElements
						nodes.push(
							React.createElement(Element, {
								key: `${indexRef.current++}`,
								...attributes,
							})
						)
						pos = nextLT + fullMatch.length
					}
				}
			} else {
				// Не распознанный тег - добавляем как текст
				nodes.push(text.substring(nextLT, nextLT + 1))
				pos = nextLT + 1
			}
		} else if (nextPos === nextBrace && nextBrace !== -1) {
			// Найден плейсхолдер
			const closeBrace = text.indexOf('}', nextBrace)
			if (closeBrace !== -1) {
				const placeholder = text.substring(nextBrace + 1, closeBrace)
				const element = replacePlaceHolder(placeholder.trim(), city)

				const node = element
					? React.cloneElement(element as React.ReactElement, {
							key: `${indexRef.current++}`,
					  })
					: text.substring(nextBrace)

				nodes.push(node)

				pos = closeBrace + 1
			} else {
				// Нет закрывающей скобки
				nodes.push(text.substring(nextBrace))
				break
			}
		}
	}

	return nodes
}

const htmlToReactAttributes = (htmlAttrs: Record<string, string>): Record<string, any> => {
	const reactProps: Record<string, any> = {}

	for (const [key, value] of Object.entries(htmlAttrs)) {
		let reactKey = key

		// Преобразование HTML-атрибутов в React-пропсы
		switch (key) {
			case 'class':
				reactKey = 'className'
				break
			case 'for':
				reactKey = 'htmlFor'
				break
			case 'style':
				// Обработка inline стилей
				const styleObj: Record<string, string> = {}
				value.split(';').forEach(style => {
					const [prop, val] = style.split(':').map(s => s.trim())
					if (prop && val) {
						const reactProp = prop.replace(/-([a-z])/g, g => g[1].toUpperCase())
						styleObj[reactProp] = val
					}
				})
				reactProps[reactKey] = styleObj
				break
			default:
				// Преобразование data-* и aria-* атрибутов
				if (key.startsWith('data-') || key.startsWith('aria-') || key.startsWith('on')) {
					reactKey = key
				} else {
					// Преобразование kebab-case в camelCase для остальных атрибутов
					reactKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase())
				}
		}

		// Обработка булевых атрибутов
		if (value === '' && ['disabled', 'checked', 'selected', 'readonly', 'required'].includes(key)) {
			reactProps[reactKey] = true
		} else if (reactKey !== 'style') {
			reactProps[reactKey] = value
		}
	}

	return reactProps
}
