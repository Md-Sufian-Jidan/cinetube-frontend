"use client";

import { registerAction } from "@/app/(commonLayout)/(auth)/register/_actions";
import AppField from "@/components/shared/form/AppField";
import AppSubmitButton from "@/components/shared/form/AppSubmitButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ROLES } from "@/constant/role";
import { IRegisterPayload, registerZodSchema } from "@/zod/auth.validation";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, UserPlus, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

interface RegisterFormProps {
    redirectPath?: string;
}

export const RegisterForm = ({ redirectPath }: RegisterFormProps) => {
    const [serverError, setServerError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (payload: IRegisterPayload) => registerAction(payload, redirectPath),
    });

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: ROLES.USER,
        },
        onSubmit: async ({ value }) => {
            const registerData = {
                name: value.name,
                email: value.email,
                password: value.password,
                role: ROLES.USER,
            };
            setServerError(null);
            try {
                const result = await mutateAsync(registerData) as any;
                if (!result.success) {
                    setServerError(result.message || "Registration failed");
                    return;
                }
                toast.success("Registration successful! Please login.");
                window.location.href = "/login";
            } catch (error: any) {
                setServerError(`Registration failed: ${error.message}`);
            }
        }
    });

    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <Card className="w-full max-w-md border-slate-200 bg-white shadow-2xl rounded-[2rem] overflow-hidden">
                <CardHeader className="space-y-3 pb-8 pt-10 text-center bg-[#0F172A] text-white">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAB308] text-[#0F172A]">
                        <UserPlus className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                        <CardTitle className="font-playfair text-3xl font-black tracking-tight">
                            Join Cine<span className="text-[#EAB308]">Tube</span>
                        </CardTitle>
                        <CardDescription className="text-slate-400 font-medium">
                            Create your premiere account to start watching
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="pt-8">
                    <div className="space-y-4">
                        <Button
                            type="button"
                            onClick={() => {
                                window.location.href = `${API_BASE_URL}/auth/sign-in/google`;
                            }}
                            className="w-full h-14 rounded-2xl bg-[#EAB308] text-black font-bold hover:bg-[#EAB308]/90"
                        >
                            Continue with Google
                        </Button>
                        <div className="relative text-center text-sm text-slate-400">
                            <span className="relative z-10 bg-white px-4">or register with email</span>
                            <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
                        </div>
                    </div>
                    <form
                        noValidate
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            form.handleSubmit();
                        }}
                        className="space-y-4"
                    >
                        <form.Field
                            name="name"
                            validators={{ onChange: registerZodSchema.shape.name }}
                        >
                            {(field) => (
                                <AppField
                                    field={field}
                                    label="Full Name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="font-sans"
                                />
                            )}
                        </form.Field>

                        <form.Field
                            name="email"
                            validators={{ onChange: registerZodSchema.shape.email }}
                        >
                            {(field) => (
                                <AppField
                                    field={field}
                                    label="Email Address"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            )}
                        </form.Field>

                        <form.Field
                            name="password"
                            validators={{ onChange: registerZodSchema.shape.password }}
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
                                            className="h-8 w-8 text-slate-500 hover:bg-slate-100 transition-colors"
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

                        <form.Subscribe
                            selector={(s) => [s.canSubmit, s.isSubmitting] as const}
                        >
                            {([canSubmit, isSubmitting]) => (
                                <AppSubmitButton
                                    isPending={isSubmitting || isPending}
                                    pendingLabel="Creating Account..."
                                    disabled={!canSubmit}
                                    className="w-full bg-[#0F172A] hover:bg-[#1e293b] text-white font-bold py-6 rounded-xl transition-all shadow-lg active:scale-[0.98]"
                                >
                                    Get Started
                                </AppSubmitButton>
                            )}
                        </form.Subscribe>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4 border-t border-slate-50 bg-slate-50/50 py-6 text-center">
                    <p className="text-sm font-medium text-slate-500">
                        Already have an account?{" "}
                        <Link href="/login" className="font-bold text-[#0F172A] hover:text-[#EAB308] transition-colors underline-offset-4 hover:underline">
                            Sign In Instead
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};