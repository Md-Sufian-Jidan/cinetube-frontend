"use client"

import { registerAction } from "@/app/(commonLayout)/(auth)/register/_actions";
/* eslint-disable @typescript-eslint/no-explicit-any */
import AppField from "@/components/shared/form/AppField";
import AppSubmitButton from "@/components/shared/form/AppSubmitButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ROLES } from "@/constant/role";
import { IRegisterPayload, registerZodSchema } from "@/zod/auth.validation";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface RegisterFormProps {
    redirectPath?: string;
}

export const RegisterForm = ({ redirectPath }: RegisterFormProps) => {
    // const queryClient = useQueryClient();

    const [serverError, setServerError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (payload: IRegisterPayload) => registerAction(payload, redirectPath),
    })

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
            }
            setServerError(null);
            try {
                const result = await mutateAsync(registerData) as any;

                console.log("Register result from register form: ", result);
                if (!result.success) {
                    setServerError(result.message || "Registration failed");
                    return;
                }

                // ✅ success case
                toast.success("Registration successful! Please login.");
                window.location.href = "/login";
            } catch (error: any) {
                console.log(`Registration failed: ${error.message}`);
                setServerError(`Registration failed: ${error.message}`);
            }
        }
    })
    return (
        <Card className="w-full max-w-md mx-auto shadow-md">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Welcome!</CardTitle>
                <CardDescription>
                    Please enter your credentials to register.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form
                    method="POST"
                    action="#"
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
                                label="Name"
                                type="text"
                                placeholder="Enter your name"
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
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
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
                                // type="text"
                                placeholder="Enter your password"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="cursor-pointer"
                                append={
                                    <Button
                                        type="button"
                                        onClick={() => setShowPassword((value) => !value)}
                                        variant="ghost"
                                        size="icon"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="size-4" aria-hidden="true" />
                                        ) : (
                                            <Eye className="size-4" aria-hidden="true" />
                                        )}
                                    </Button>
                                }
                            />
                        )}
                    </form.Field>

                    <div className="text-right mt-2">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-primary hover:underline underline-offset-4"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {serverError && (
                        <Alert variant={"destructive"}>
                            <AlertDescription>{serverError}</AlertDescription>
                        </Alert>
                    )}

                    <form.Subscribe
                        selector={(s) => [s.canSubmit, s.isSubmitting] as const}
                    >
                        {([canSubmit, isSubmitting]) => (
                            <AppSubmitButton isPending={isSubmitting || isPending} pendingLabel="Signing Up...." disabled={!canSubmit}>
                                Sign Up
                            </AppSubmitButton>
                        )}
                    </form.Subscribe>
                </form>
            </CardContent>

        </Card>
    );
}