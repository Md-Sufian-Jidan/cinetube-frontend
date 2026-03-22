"use client"

import { useQuery } from "@tanstack/react-query"
import { getAllMedia } from "@/app/(commonLayout)/all-movie/_actions"

/**
 * 
 * @returns 0
: 
averageRating
: 
0
cast
: 
(2) [{…}, {…}]
createdAt
: 
"2026-03-20T02:37:52.242Z"
director
: 
"David Crane & Marta Kauffman"
genres
: 
(2) [{…}, {…}]
id
: 
"e71e1a61-fc61-44de-a392-d725736e239c"
posterUrl
: 
"https://image.tmdb.org/t/p/w500/f496p9HiSms5p6gJu2SIvXnSFA4.jpg"
pricing
: 
"FREE"
releaseYear
: 
1994
streamingLink
: 
"https://www.hbo.com/series/friends"
synopsis
: 
"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan."
title
: 
"Friends"
totalReviews
: 
0
type
: 
"SERIES"
updatedAt
: 
"2026-03-20T02:37:52.242Z"
_count
: 
{reviews: 0}
 */
export default function AllMedia() {
    const { data } = useQuery({
        queryKey: ['medias'],
        queryFn: () => getAllMedia(),
    });
    console.log(data);
    return (
        <div>AllMedia {data?.meta?.total}</div>
    )
}