export interface IOrderable<T> {
	default: T
	cities: Record<string, T>
	get: (key: string) => T
}

export class Orderable<T> implements IOrderable<T> {
	default: T
	cities: Record<string, T>

	constructor(defaultValue: T, cities: Record<string, T>) {
		this.default = defaultValue
		this.cities = cities
	}

	get = (key: string) => this.cities[key] || this.default
}
