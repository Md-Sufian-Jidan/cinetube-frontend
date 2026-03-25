import { httpClient } from "@/lib/axios/httpClient";
import { CreateMediaDto, IMedia, UpdateMediaDto } from "@/types/media.types";

export const MediaService = {
    getAllMedia: async () => {
        return await httpClient.get<IMedia[]>({
            url: "/media"
        });
    },

    getSingleMedia: async (id: string) => {
        return await httpClient.get<IMedia>({
            url: `/media/${id}`
        });
    },

    createMedia: async (data: CreateMediaDto) => {
        return await httpClient.post<IMedia>(data, {
            url: "/media"
        });
    },

    updateMedia: async (id: string, data: UpdateMediaDto) => {
        return await httpClient.patch<IMedia>(data, {
            url: `/media/${id}`
        });
    },

    deleteMedia: async (id: string) => {
        return await httpClient.delete<IMedia>({
            url: `/media/${id}`
        });
    }
};
