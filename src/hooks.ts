import type { GetSession, Handle } from '@sveltejs/kit';
import { parse } from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.get('cookie') || '');
	if (cookies !== null) {
		event.locals.user = {
			userid: cookies.TestAppCookie
		};
	}
	return await resolve(event);
};

export const getSession:GetSession = async event => {
	console.log(event);
	return {
		user: event.locals.user
	};
}