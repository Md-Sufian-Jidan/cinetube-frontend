import { httpClient } from "@/lib/axios/httpClient"

export const getAllMedia = async () => {
    const medias = await httpClient.get({ url: "/media" })
    return medias;
};