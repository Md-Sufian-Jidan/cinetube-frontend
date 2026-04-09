export const runtime = "nodejs"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.trim() ?? ""

    if (query.length < 2) {
        return Response.json({ suggestions: [] as string[] })
    }

    const normalizedQuery = query.toLowerCase()

    // For now, we'll provide static suggestions based on common movie/TV searches
    // In a real app, this would query your media database
    const commonSuggestions = [
        "Action movies",
        "Comedy series",
        "Drama films",
        "Sci-Fi movies",
        "Horror series",
        "Romance movies",
        "Thriller films",
        "Animation movies",
        "Documentary series",
        "Crime movies",
        "Adventure films",
        "Fantasy series",
        "Mystery movies",
        "War films",
        "Western series",
        "Family movies",
        "Superhero films",
        "Classic movies",
        "New releases",
        "Award winners",
    ]

    const filteredSuggestions = commonSuggestions
        .filter(suggestion => suggestion.toLowerCase().includes(normalizedQuery))
        .slice(0, 5)

    return Response.json({ suggestions: filteredSuggestions })
}