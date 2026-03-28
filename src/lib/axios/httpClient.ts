import { ApiResponse } from "@/types/api.types";
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
        timeout: 30000,
        withCredentials: true
    })
    return instance;
}

export interface ApiRequestOptions {
    url: string;
    params?: Record<string, string | number | boolean | null | undefined>;
    headers?: Record<string, string>;
    timeout?: number;
}

const httpGet = async <T>(options: ApiRequestOptions): Promise<ApiResponse<T>> => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().get<ApiResponse<T>>(url, { params, headers, timeout });
        console.log("Response from httpGet", response)
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpPost = async <T>(data: unknown, options: ApiRequestOptions): Promise<ApiResponse<T>> => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().post<ApiResponse<T>>(url, data, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpPut = async <T>(data: unknown, options: ApiRequestOptions): Promise<ApiResponse<T>> => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().put<ApiResponse<T>>(url, data, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpPatch = async <T>(data: unknown, options: ApiRequestOptions): Promise<ApiResponse<T>> => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().patch<ApiResponse<T>>(url, data, { params, headers, timeout });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const httpDelete = async <T>(options: ApiRequestOptions): Promise<ApiResponse<T>> => {
    const { url, params, headers, timeout } = options;
    try {
        const response = await axiosInstance().delete<ApiResponse<T>>(url, { params, headers, timeout });
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