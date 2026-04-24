import { error } from '@sveltejs/kit';
import { nps } from '../data.js';

export function load({ params }) {
	const post = nps.find((post) => post.code === params.code);

	if (!post) error(404);

	return {
		post
	};
}