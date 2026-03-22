import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
    throw new Error("API_BASE_URL is not defined");
}

const axiosInstance = () => {
    const instance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 30000
    })
    return instance;
}

export interface ApiRequestOptions {
    url: string;
    params?: Record<string, string | number | boolean | null | undefined>;
    headers?: Record<string, string>;
    timeout?: number;
}

const httpGet = async (options: ApiRequestOptions) => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().get(url, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpPost = async (data: unknown, options: ApiRequestOptions) => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().post(url, data, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpPut = async (data: unknown, options: ApiRequestOptions) => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().put(url, data, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpPatch = async (data: unknown, options: ApiRequestOptions) => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().patch(url, data, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpDelete = async (options: ApiRequestOptions) => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().delete(url, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const httpClient = {
    get: httpGet,
    post: httpPost,
    put: httpPut,
    patch: httpPatch,
    delete: httpDelete
};