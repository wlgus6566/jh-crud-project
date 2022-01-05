import axios from 'axios';
import { setInterceptors } from './interceptors';

function createWithAuth(options) {
    const instance = axios.create(
        Object.assign(
            {
                baseURL: process.env.VUE_APP_API_URL,
                timeout: 3000,
                responseEncoding: 'utf8',
            },
            {
                ...options,
            }
        )
    );
    setInterceptors(instance);
    return instance;
}

export const instance = createWithAuth();

function getContents(params) {
    return instance.get(`community/board`, {params:params});
}

function getDetailContents(id) {
    return instance.get(`community/board/${id}`);
}

function postContents(postData) {
    return instance.post(`community/board`, postData);
}

function deleteContents(id) {
    return instance.delete(`community/board/${id}`);
}

function editContents(id, postData) {
    return instance.put(`community/board/${id}`, postData);
}

export {
    getContents,
    getDetailContents,
    postContents,
    deleteContents,
    editContents
}
