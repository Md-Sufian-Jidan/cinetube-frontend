import Groq from "groq-sdk"
import { NextResponse } from "next/server"

const aiSearchTypeValues = [
    "ALL",
    "MOVIE",
    "SERIES",
] as const

const aiSearchPricingValues = [
    "ALL",
    "FREE",
    "PREMIUM",
] as const

const aiSearchGenreValues = [
    "ALL",
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
] as const

type AiSearchType = (typeof aiSearchTypeValues)[number]
type AiSearchPricing = (typeof aiSearchPricingValues)[number]
type AiSearchGenre = (typeof aiSearchGenreValues)[number]

type AiSearchResponse = {
    type: AiSearchType
    pricing: AiSearchPricing
    genre: AiSearchGenre
    searchTerm: string
}

const typeValueSet = new Set<string>(aiSearchTypeValues)
const pricingValueSet = new Set<string>(aiSearchPricingValues)
const genreValueSet = new Set<string>(aiSearchGenreValues)

export const runtime = "nodejs"

function getGroqClient() {
    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
        throw new Error("GROQ_API_KEY is missing.")
    }

    return new Groq({ apiKey })
}

function normalizeTypeValue(value: unknown): AiSearchType {
    if (typeof value === "string") {
        const normalized = value.trim().toUpperCase()
        if (typeValueSet.has(normalized)) {
            return normalized as AiSearchType
        }
        if (normalized.includes("MOVIE") || normalized.includes("FILM")) {
            return "MOVIE"
        }
        if (normalized.includes("SERIES") || normalized.includes("TV") || normalized.includes("SHOW")) {
            return "SERIES"
        }
    }
    return "ALL"
}

function normalizePricingValue(value: unknown): AiSearchPricing {
    if (typeof value === "string") {
        const normalized = value.trim().toUpperCase()
        if (pricingValueSet.has(normalized)) {
            return normalized as AiSearchPricing
        }
        if (normalized.includes("FREE") || normalized.includes("BASIC")) {
            return "FREE"
        }
        if (normalized.includes("PREMIUM") || normalized.includes("PAID")) {
            return "PREMIUM"
        }
    }
    return "ALL"
}

function normalizeGenreValue(value: unknown): AiSearchGenre {
    if (typeof value === "string") {
        const normalized = value.trim()
        // Check exact matches first
        if (genreValueSet.has(normalized)) {
            return normalized as AiSearchGenre
        }
        // Check case-insensitive matches
        const lowerNormalized = normalized.toLowerCase()
        for (const genre of aiSearchGenreValues) {
            if (genre.toLowerCase() === lowerNormalized) {
                return genre
            }
        }
        // Check partial matches
        if (lowerNormalized.includes("action")) return "Action"
        if (lowerNormalized.includes("adventure")) return "Adventure"
        if (lowerNormalized.includes("animation") || lowerNormalized.includes("animated")) return "Animation"
        if (lowerNormalized.includes("comedy") || lowerNormalized.includes("funny")) return "Comedy"
        if (lowerNormalized.includes("crime") || lowerNormalized.includes("criminal")) return "Crime"
        if (lowerNormalized.includes("documentary")) return "Documentary"
        if (lowerNormalized.includes("drama")) return "Drama"
        if (lowerNormalized.includes("family")) return "Family"
        if (lowerNormalized.includes("fantasy")) return "Fantasy"
        if (lowerNormalized.includes("horror") || lowerNormalized.includes("scary")) return "Horror"
        if (lowerNormalized.includes("mystery")) return "Mystery"
        if (lowerNormalized.includes("romance") || lowerNormalized.includes("love")) return "Romance"
        if (lowerNormalized.includes("sci-fi") || lowerNormalized.includes("science")) return "Sci-Fi"
        if (lowerNormalized.includes("thriller")) return "Thriller"
        if (lowerNormalized.includes("war")) return "War"
        if (lowerNormalized.includes("western")) return "Western"
    }
    return "ALL"
}

function normalizeAiSearchResponse(value: unknown): AiSearchResponse {
    const parsed =
        value && typeof value === "object"
            ? (value as Record<string, unknown>)
            : ({} as Record<string, unknown>)

    const rawSearchTerm =
        typeof parsed.searchTerm === "string" ? parsed.searchTerm.trim() : ""
    const searchTerm = rawSearchTerm || ""

    const type = normalizeTypeValue(parsed.type)
    const pricing = normalizePricingValue(parsed.pricing)
    const genre = normalizeGenreValue(parsed.genre)

    return {
        type,
        pricing,
        genre,
        searchTerm,
    }
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as { prompt?: string }
        const prompt = body.prompt?.trim()

        if (!prompt) {
            return NextResponse.json(
                { error: "Please provide a natural-language search request." },
                { status: 400 }
            )
        }

        const groq = getGroqClient()
        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            temperature: 0.1,
            response_format: {
                type: "json_object",
            },
            messages: [
                {
                    role: "system",
                    content:
                        `You convert natural-language movie/TV requests into CineTube explore filters.
Return only a valid JSON object with exactly these keys:
{
  "type": "ALL" | "MOVIE" | "SERIES",
  "pricing": "ALL" | "FREE" | "PREMIUM",
  "genre": "ALL" | "Action" | "Adventure" | "Animation" | "Comedy" | "Crime" | "Documentary" | "Drama" | "Family" | "Fantasy" | "Horror" | "Mystery" | "Romance" | "Sci-Fi" | "Thriller" | "War" | "Western",
  "searchTerm": string
}
Rules:
- Use "ALL" when type, pricing, or genre are not specified.
- Extract specific movie/TV show titles or keywords into searchTerm.
- Map genre descriptions to the closest matching genre from the list.
- For pricing, use "FREE" for free content, "PREMIUM" for paid content.
- Never include extra keys, prose, or markdown.`,
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        })

        const content = completion.choices[0]?.message?.content

        if (!content) {
            return NextResponse.json(
                { error: "The AI search response was empty." },
                { status: 502 }
            )
        }

        let parsedContent: unknown

        try {
            parsedContent = JSON.parse(content)
        } catch {
            return NextResponse.json(
                { error: "The AI search response could not be parsed." },
                { status: 502 }
            )
        }

        return NextResponse.json({
            filters: normalizeAiSearchResponse(parsedContent),
        })
    } catch (error) {
        if (error instanceof Error && error.message === "GROQ_API_KEY is missing.") {
            return NextResponse.json(
                { error: "AI search is not configured yet. Add GROQ_API_KEY to enable it." },
                { status: 503 }
            )
        }

        return NextResponse.json(
            {
                error:
                    "We could not process that AI search right now. Please try again in a moment.",
            },
            { status: 500 }
        )
    }
}