/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import axios from 'axios';
import Cookies from 'js-cookie';

/** constants */
import { accessTokenCookieKey } from '@module-base/constants';
import { API_HOST } from '@root/constants';

/** types */
import type { AxiosError, AxiosResponse, AxiosRequestConfig, CreateAxiosDefaults } from '@module-base/models';

/** for default api */
const axiosDefaultConfig: CreateAxiosDefaults = {
    baseURL: API_HOST,
    headers: { 'Content-Type': 'application/json' },
    timeout: 600,
};
const axiosClient = axios.create(axiosDefaultConfig);

/** for file api */
const axiosDefaultFormDataConfig = {
    baseURL: API_HOST,
    headers: { 'Content-Type': 'multipart/form-data' },
};
const axiosClientCDN = axios.create(axiosDefaultFormDataConfig);

/** Add a request interceptor */
axiosClient.interceptors.request.use(
    (config) => {
        const token = Cookies.get(accessTokenCookieKey);
        if (config.headers) {
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            config.headers.lang = 'en';
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/** Add a response interceptor */
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return {
            ...response.data,
            status: response.status,
        };
    },
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            Cookies.remove(accessTokenCookieKey);
        }
        return Promise.reject(error);
    }
);

export const callApi = async <R>(options: AxiosRequestConfig, isCDN?: boolean) => {
    const client = isCDN ? axiosClientCDN : axiosClient;
    return client<any, R>(options);
};
