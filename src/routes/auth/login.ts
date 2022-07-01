import { serialize } from 'cookie';

export async function post({ request, url }) {
    return {
        status: 200,
        headers: {
            'set-cookie': serialize('TestAppCookie', 'TesterName', {
                path: '/',
                httpOnly: true
            })
        }
    };
};