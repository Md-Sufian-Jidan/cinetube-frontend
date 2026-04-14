"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed");

            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Glass Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
            p-10 md:p-14 rounded-3xl
            bg-white/20 dark:bg-black/30
            backdrop-blur-xl
            border border-white/10
            shadow-xl
          "
                >

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 dark:text-white">
                        Send us a{" "}
                        <span className="text-[#EAB308]">Message</span>
                    </h2>

                    <p className="text-center mt-3 text-slate-600 dark:text-slate-300">
                        We usually reply within 24 hours
                    </p>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 space-y-5"
                    >

                        {/* Name */}
                        <div>
                            <Input
                                placeholder="Your Name"
                                {...register("name")}
                                className="bg-white/10 dark:bg-black/20 border-white/10"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <Input
                                placeholder="Your Email"
                                {...register("email")}
                                className="bg-white/10 dark:bg-black/20 border-white/10"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <Textarea
                                placeholder="Your Message..."
                                rows={5}
                                {...register("message")}
                                className="bg-white/10 dark:bg-black/20 border-white/10"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={loading}
                            className="
                w-full h-12 font-bold
                bg-[#EAB308]
                hover:bg-[#d9a807]
                text-black
                rounded-full
                shadow-lg shadow-[#EAB308]/30
              "
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </Button>

                    </form>
                </motion.div>
            </div>
        </section>
    );
}