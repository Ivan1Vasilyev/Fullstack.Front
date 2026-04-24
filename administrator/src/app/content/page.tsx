import Content from '@/components/pages/content/content'
import providersService from '@/lib/services/providers-service/providers-service'

const Page = async () => {
	const providers = await providersService.getAll()

	return <Content providers={providers} />
}

export default Page
