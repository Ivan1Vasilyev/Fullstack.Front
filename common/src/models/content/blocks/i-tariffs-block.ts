import { ITariff } from '../../business/tariff'
import { IHeaderBlock } from './i-header-block'

export interface ITariffBlock extends IHeaderBlock {
	tariffs: ITariff[]
}
