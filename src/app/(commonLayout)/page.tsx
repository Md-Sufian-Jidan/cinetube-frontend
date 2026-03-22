import Link from "next/link";

export default async function CommonPage() {
    return (
        <div>
            <h1>CommonPage</h1>
            <br />
            <br />
            <Link href="/all-movie">All Movie</Link>
        </div>
    );
}