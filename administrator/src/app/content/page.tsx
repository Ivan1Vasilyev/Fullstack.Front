import Content from '@/components/pages/content/content'
import providersService from '@/lib/services/providers-service/providers-service'

const Page = () => <Content providersPromise={providersService.getAll()} />

export default Page
