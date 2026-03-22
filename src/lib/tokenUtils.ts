"use server"

import { setCookie } from "./cookieUtils";

const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN;

export const setTokenCookies = async (name: string, token: string, fallBackMaxAge: number = 60 * 60 * 24 * 7) => {
    if (!JWT_ACCESS_TOKEN) {
        throw new Error("JWT_ACCESS_TOKEN is not defined");
    }
    await setCookie(name, token, fallBackMaxAge);
};