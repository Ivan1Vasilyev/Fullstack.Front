import Placeholders from '@/app/static-components/placeholder/placeholder'
import { cityModel } from '@frontend/common'

const Faq = ({ text, city }: { text: string; city: cityModel }) => {
	return (
		<div>
			<Placeholders text={text} city={city} />
		</div>
	)
}

export default Faq

export const dynamic = 'force-static'
