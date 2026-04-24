import { error } from '@sveltejs/kit';
import { nps } from '$lib/data.js';

export function load({ params }) {
	const np = nps.find((post) => post.code === params.code);

	if (!np) error(404);

	return {
		np
	};
}