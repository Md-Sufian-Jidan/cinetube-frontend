import { QueryClient, HydrationBoundary, dehydrate, useQuery } from "@tanstack/react-query"
import { getAllMedia } from "./_actions"
import AllMedia from "@/components/modules/media/AllMedia"

export default async function AllMoviePage() {

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['medias'],
        queryFn: getAllMedia,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <AllMedia />
        </HydrationBoundary>
    )
}