import { ITitle } from '../source/i-title'

export interface IHeaderBlock extends ITitle {
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
