import LoginForm from "@/components/modules/auth/LoginForm";

interface LoginParams {
    searchParams: Promise<{ redirect?: string }>;
}

const LoginPage = async ({ searchParams }: LoginParams) => {
    const params = await searchParams;
    const redirectPath = params.redirect;
    return (
        <div className="py-12">
            <LoginForm redirectPath={redirectPath} />
        </div>
    )
}

export default LoginPage