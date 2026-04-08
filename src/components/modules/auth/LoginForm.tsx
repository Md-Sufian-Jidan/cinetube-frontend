"use client";

import axios from "axios";
import AppField from "@/components/shared/form/AppField";
import AppSubmitButton from "@/components/shared/form/AppSubmitButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ROLES } from "@/constant/role";
import { loginZodSchema } from "@/zod/auth.validation";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const DEMO_CREDENTIALS = {
    email: "demo@cinetube.com",
    password: "Demo1234!",
};

const LoginForm = () => {
    const [serverError, setServerError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({ value }) => {
            setServerError(null);
            try {
                const res = await axios.post(`${API_BASE_URL}/auth/sign-in/email`, value, {
                    withCredentials: true,
                });
                const data = res.data;
                if (!data?.user) {
                    setServerError("Login failed. Please try again.");
                    return;
                }

                toast.success("Welcome back to CineTube!");
                if (data.user.role === ROLES.ADMIN) {
                    router.push("/admin/dashboard");
                } else {
                    router.push("/dashboard");
                }
                router.refresh();
            } catch (error: any) {
                setServerError(error?.response?.data?.message || "Invalid credentials.");
            }
        },
    });

    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <Card className="w-full max-w-md border-slate-200 bg-white shadow-2xl rounded-[2rem] overflow-hidden">
                <CardHeader className="space-y-3 pb-8 pt-10 text-center bg-[#0F172A] text-white">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAB308] text-[#0F172A]">
                        <Lock className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                        <CardTitle className="font-playfair text-3xl font-black tracking-tight">
                            Cine<span className="text-[#EAB308]">Tube</span>
                        </CardTitle>
                        <CardDescription className="text-slate-400 font-medium">
                            Enter your cinema credentials to continue
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="pt-8">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            form.handleSubmit();
                        }}
                        className="space-y-5"
                    >
                        <form.Field
                            name="email"
                            validators={{ onChange: loginZodSchema.shape.email }}
                        >
                            {(field) => (
                                <AppField
                                    field={field}
                                    label="Email Address"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="font-sans"
                                />
                            )}
                        </form.Field>

                        <form.Field
                            name="password"
                            validators={{ onChange: loginZodSchema.shape.password }}
                        >
                            {(field) => (
                                <AppField
                                    field={field}
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    append={
                                        <Button
                                            type="button"
                                            onClick={() => setShowPassword((v) => !v)}
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-slate-500 hover:bg-slate-100 hover:text-[#EAB308] transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </Button>
                                    }
                                />
                            )}
                        </form.Field>

                        {serverError && (
                            <Alert variant="destructive" className="rounded-xl border-red-100 bg-red-50 text-red-600">
                                <AlertDescription className="font-medium text-center">
                                    {serverError}
                                </AlertDescription>
                            </Alert>
                        )}

                        <div className="grid gap-3 sm:grid-cols-2">
                            <Button
                                type="button"
                                onClick={() => {
                                    form.setFieldValue("email", DEMO_CREDENTIALS.email);
                                    form.setFieldValue("password", DEMO_CREDENTIALS.password);
                                    setTimeout(() => form.handleSubmit(), 10);
                                }}
                                className="h-14 rounded-2xl border border-slate-200 bg-white text-slate-700 font-bold hover:border-[#EAB308] hover:bg-[#EAB308]/10"
                            >
                                Demo Login
                            </Button>

                            <Button
                                type="button"
                                onClick={() => {
                                    window.location.href = `${API_BASE_URL}/auth/sign-in/google`;
                                }}
                                className="h-14 rounded-2xl bg-[#EAB308] text-black font-bold hover:bg-[#EAB308]/90"
                            >
                                Continue with Google
                            </Button>
                        </div>

                        <form.Subscribe
                            selector={(s) => [s.canSubmit, s.isSubmitting] as const}
                        >
                            {([canSubmit, isSubmitting]) => (
                                <AppSubmitButton
                                    isPending={isSubmitting}
                                    disabled={!canSubmit}
                                    className="w-full bg-[#0F172A] hover:bg-[#1e293b] text-white font-bold py-6 rounded-xl transition-all shadow-lg shadow-slate-200 active:scale-[0.98]"
                                >
                                    Access Account
                                </AppSubmitButton>
                            )}
                        </form.Subscribe>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4 border-t border-slate-50 bg-slate-50/50 py-6 text-center">
                    <p className="text-sm font-medium text-slate-500">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-bold text-[#0F172A] hover:text-[#EAB308] transition-colors underline-offset-4 hover:underline">
                            Create Premiere Account
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginForm;