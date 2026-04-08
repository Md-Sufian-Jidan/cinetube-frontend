import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getAllMedia } from "./_actions"
import AllMovies from "@/components/modules/media/AllMedia";

export default async function AllMoviePage() {
    const page = 1;
    const limit = 8;
    const searchTerm = "";

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['medias', page, limit, searchTerm, 'ALL', 'ALL', 'latest'],
        queryFn: () => getAllMedia(page, limit, searchTerm, 'ALL', 'ALL', 'latest'),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <AllMovies />
        </HydrationBoundary>
    )
}