import { type RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ json }) => {
    json(200, { hello: 'world' });
};
export const onPost: RequestHandler = async ({ json }) => {
    json(200, { hello: 'onPost' });
};
export const onPut: RequestHandler = async ({ json }) => {
    json(200, { hello: 'onPut' });
};
export const onPatch: RequestHandler = async ({ json }) => {
    json(200, { hello: 'onPatch' });
};