import { nps } from './data'; 

export function load() {
	return {
		nps: nps.map((np) => ({
			code: np.code,
			name: np.name
		}))
	};
}