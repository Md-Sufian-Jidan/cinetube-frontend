import Link from "next/link";

export default async function CommonPage() {
    return (
        <div>
            <Link href="/all-movie">All Movie</Link>
            <br />
            <Link href="/all-series">All Series</Link>
        </div>
    );
}