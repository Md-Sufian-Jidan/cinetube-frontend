import { RegisterForm } from "@/components/modules/auth/RegisterForm";

interface RegisterParams {
    searchParams: Promise<{ redirect?: string }>;
}

export default async function RegisterPage({ searchParams }: RegisterParams) {
    const params = await searchParams;
    const redirectPath = params.redirect;
    return (
        <main className="py-6">
            <RegisterForm redirectPath={redirectPath} />
        </main>
    )
}
