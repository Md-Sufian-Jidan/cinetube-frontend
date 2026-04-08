import LoginForm from "@/components/modules/auth/LoginForm";

interface LoginParams {
    searchParams: Promise<{ redirect?: string }>;
}

const LoginPage = async ({ searchParams }: LoginParams) => {
    return (
        <main className="py-6">
            <LoginForm />
        </main>
    )
}

export default LoginPage