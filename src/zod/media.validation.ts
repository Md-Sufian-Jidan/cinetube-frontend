import { z } from "zod";

export const mediaZodSchema = z.object({
    title: z.string().min(1, "Title is required"),
    synopsis: z.string().min(10, "Synopsis should be at least 10 characters"),
    releaseYear: z.number().int().min(1800, "Invalid year").max(new Date().getFullYear() + 5, "Invalid year"),
    director: z.string().min(1, "Director is required"),
    type: z.enum(["MOVIE", "SERIES"]),
    pricing: z.enum(["FREE", "PREMIUM"]),
    streamingLink: z.string().url("Invalid streaming link"),
    posterUrl: z.string().url("Invalid poster URL"),
    genres: z.array(z.string()).min(1, "At least one genre is required"),
    cast: z.array(z.object({
        name: z.string().min(1, "Cast name is required"),
        role: z.string().min(1, "Cast role is required")
    })).min(1, "At least one cast member is required")
});

export type IMediaPayload = z.infer<typeof mediaZodSchema>;
