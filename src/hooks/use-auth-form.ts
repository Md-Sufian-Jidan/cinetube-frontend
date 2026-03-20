"use client";

import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { loginSchema } from "@/schemas/auth";

export function useLoginForm(onSubmit: (values: any) => void) {
  return useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: zodValidator(loginSchema),
      onSubmit: zodValidator(loginSchema),
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });
}
