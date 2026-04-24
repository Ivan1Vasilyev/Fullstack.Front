import TariffsForm from '@/components/pages/files/tariffs-form'
import filesService from '@/lib/services/files-service/files-service'

const Page = async () => {
	const loaders = await filesService.get()

	return <TariffsForm loaders={loaders} />
}

export default Page
