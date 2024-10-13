import { MakeApiRequest } from "./Api"

export const login = async (body, params) => {
    const url = 'api/auth/login'
    const response = await MakeApiRequest('POST', url, body, {}, false, false);
    return response;
};

export const signUp = async (body, params) => {
    const url = 'api/auth/signup'
    const response = await MakeApiRequest('POST', url, body, params, false, false);
    return response;
};

export const getListing = async (params) => {
    const url = 'api/adds/'
    const response = await MakeApiRequest('GET', url, {}, params, false, false);
    return response;
};

export const createAdd = async (body, params) => {
    const url = '/api/adds/publish_add'
    const response = await MakeApiRequest('POST', url, body, params, true, false);
    return response;
};

export const editAdd = async (body, params) => {
    const url = '/api/adds/editAdd'
    const response = await MakeApiRequest('PUT', url, body, params, true, false);
    return response;
};

export const deleteAdd = async (body, params) => {
    const url = '/api/adds/deleteAdd'
    const response = await MakeApiRequest('DELETE', url, body, params, true, false);
    return response;
};

export const uploadHero = async (body, params) => {
    const url = '/api/adds/upload_hero'
    const response = await MakeApiRequest('POST', url, body, params, true, true);
    return response;
};