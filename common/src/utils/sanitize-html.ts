export const sanitizeHtml = async (html: string) => {
	if (typeof window === 'undefined') {
		// Сервер: используем isomorphic версию
		const DOMPurify = (await import('isomorphic-dompurify')).default
		return DOMPurify.sanitize(html)
	} else {
		// Клиент: используем лёгкую версию
		const DOMPurify = (await import('dompurify')).default
		return DOMPurify.sanitize(html)
	}
}
