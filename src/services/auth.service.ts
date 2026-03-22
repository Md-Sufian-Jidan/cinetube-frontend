import { httpClient } from "@/lib/axios/httpClient"

const getAllMedia = async () => {
    const medias = await httpClient.get({ url: "/media" })
    return medias;
}

export const authService = {
    getAllMedia
}