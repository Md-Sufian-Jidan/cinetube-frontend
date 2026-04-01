"use client";

import { createMediaAction } from "@/app/(dashboardLayout)/admin/add-media/_actions";
import AppField from "@/components/shared/form/AppField";
import AppSubmitButton from "@/components/shared/form/AppSubmitButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mediaZodSchema } from "@/zod/media.validation";
import { useForm } from "@tanstack/react-form";
import { Plus, Trash2, Film, Clapperboard, DollarSign, Globe, Image as ImageIcon, Users, Tags } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const AddMediaForm = () => {
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            title: "",
            synopsis: "",
            releaseYear: new Date().getFullYear(),
            director: "",
            type: "MOVIE" as "MOVIE" | "SERIES",
            pricing: "FREE" as "FREE" | "PREMIUM",
            streamingLink: "",
            posterUrl: "",
            genres: [""],
            cast: [{ name: "", role: "" }]
        },
        onSubmit: async ({ value }) => {
            try {
                // Ensure number types for validation
                const payload = {
                    ...value,
                    releaseYear: Number(value.releaseYear),
                };

                const res = await createMediaAction(payload);
                if (res.success) {
                    toast.success("Media created successfully!");
                    form.reset();
                    router.push("/admin/media-analytics");
                } else {
                    toast.error(res.message || "Failed to create media");
                }
            } catch (error: any) {
                toast.error("Something went wrong");
            }
        },
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-full max-w-4xl mx-auto bg-[#0B0E14]/80 backdrop-blur-md border-white/5 shadow-2xl">
                <CardHeader className="border-b border-white/5 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#EAB308]/10 rounded-lg">
                            <Film className="w-6 h-6 text-[#EAB308]" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Create New Media
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Fill in the details to add a new movie or series to CinéTube.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-8">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            form.handleSubmit();
                        }}
                        className="space-y-8"
                    >
                        {/* Basic Information Section */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 text-[#EAB308] opacity-80 mb-4 transition-opacity hover:opacity-100">
                                <Clapperboard className="w-4 h-4" />
                                <h3 className="text-sm font-bold uppercase tracking-widest">Basic Information</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <form.Field
                                    name="title"
                                    validators={{ onChange: mediaZodSchema.shape.title }}
                                >
                                    {(field) => (
                                        <AppField field={field} label="Title" placeholder="e.g. Inception" />
                                    )}
                                </form.Field>

                                <form.Field
                                    name="releaseYear"
                                    validators={{ onChange: mediaZodSchema.shape.releaseYear }}
                                >
                                    {(field) => (
                                        <AppField field={field} label="Release Year" type="number" placeholder="2024" />
                                    )}
                                </form.Field>

                                <form.Field
                                    name="director"
                                    validators={{ onChange: mediaZodSchema.shape.director }}
                                >
                                    {(field) => (
                                        <AppField field={field} label="Director" placeholder="e.g. Christopher Nolan" />
                                    )}
                                </form.Field>

                                <div className="grid grid-cols-2 gap-4">
                                    <form.Field name="type">
                                        {(field) => (
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Type</label>
                                                <Select
                                                    value={field.state.value}
                                                    onValueChange={(v: any) => field.handleChange(v)}
                                                >
                                                    <SelectTrigger className="bg-[#161B22] border-white/10">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-[#161B22] border-white/10">
                                                        <SelectItem value="MOVIE">Movie</SelectItem>
                                                        <SelectItem value="SERIES">Series</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        )}
                                    </form.Field>
                                    <form.Field name="pricing">
                                        {(field) => (
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Pricing</label>
                                                <Select
                                                    value={field.state.value}
                                                    onValueChange={(v: any) => field.handleChange(v)}
                                                >
                                                    <SelectTrigger className="bg-[#161B22] border-white/10">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-[#161B22] border-white/10">
                                                        <SelectItem value="FREE">Free</SelectItem>
                                                        <SelectItem value="PREMIUM">Premium</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        )}
                                    </form.Field>
                                </div>
                            </div>
                            <form.Field
                                name="synopsis"
                                validators={{ onChange: mediaZodSchema.shape.synopsis }}
                            >
                                {(field) => (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Synopsis</label>
                                        <textarea
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            className="w-full min-h-[120px] rounded-md border border-white/10 bg-[#161B22] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EAB308]/50"
                                            placeholder="Write a brief overview of the media..."
                                        />
                                        {field.state.meta.errors.length > 0 && (
                                            <p className="text-xs text-destructive">{field.state.meta.errors[0]?.message as string}</p>
                                        )}
                                    </div>
                                )}
                            </form.Field>
                        </section>

                        {/* Media Links Section */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 text-[#EAB308] opacity-80 mb-4 transition-opacity hover:opacity-100">
                                <Globe className="w-4 h-4" />
                                <h3 className="text-sm font-bold uppercase tracking-widest">Media Links</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <form.Field
                                    name="streamingLink"
                                    validators={{ onChange: mediaZodSchema.shape.streamingLink }}
                                >
                                    {(field) => (
                                        <AppField
                                            field={field}
                                            label="Streaming Link"
                                            placeholder="https://server.com/watch/..."
                                            prepend={<Globe className="w-4 h-4 text-gray-500" />}
                                        />
                                    )}
                                </form.Field>
                                <form.Field
                                    name="posterUrl"
                                    validators={{ onChange: mediaZodSchema.shape.posterUrl }}
                                >
                                    {(field) => (
                                        <AppField
                                            field={field}
                                            label="Poster URL"
                                            placeholder="https://image.com/poster.jpg"
                                            prepend={<ImageIcon className="w-4 h-4 text-gray-500" />}
                                        />
                                    )}
                                </form.Field>
                            </div>
                        </section>

                        {/* Genres Section */}
                        <section className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[#EAB308] opacity-80 transition-opacity hover:opacity-100">
                                    <Tags className="w-4 h-4" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest">Genres</h3>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => form.setFieldValue("genres", (prev) => [...prev, ""])}
                                    className="border-white/10 hover:bg-white/5"
                                >
                                    <Plus className="w-4 h-4 mr-1" /> Add Genre
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <form.Field name="genres">
                                    {(field) => (
                                        <AnimatePresence>
                                            {field.state.value.map((genre, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    className="flex items-center gap-1 group"
                                                >
                                                    <input
                                                        value={genre}
                                                        onChange={(e) => {
                                                            const newGenres = [...field.state.value];
                                                            newGenres[index] = e.target.value;
                                                            field.handleChange(newGenres);
                                                        }}
                                                        className="h-9 px-3 rounded-md border border-white/10 bg-[#161B22] text-sm md:w-[150px] focus:outline-none focus:border-[#EAB308]/50"
                                                        placeholder="Genre name"
                                                    />
                                                    {field.state.value.length > 1 && (
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => {
                                                                const newGenres = field.state.value.filter((_, i) => i !== index);
                                                                field.handleChange(newGenres);
                                                            }}
                                                            className="h-9 w-9 text-gray-500 hover:text-red-400 group-hover:opacity-100 md:opacity-0 transition-opacity"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    )}
                                </form.Field>
                            </div>
                        </section>

                        {/* Cast Section */}
                        <section className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[#EAB308] opacity-80 transition-opacity hover:opacity-100">
                                    <Users className="w-4 h-4" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest">Cast & Crew</h3>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => form.setFieldValue("cast", (prev) => [...prev, { name: "", role: "" }])}
                                    className="border-white/10 hover:bg-white/5"
                                >
                                    <Plus className="w-4 h-4 mr-1" /> Add Cast
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <form.Field name="cast">
                                    {(field) => (
                                        <AnimatePresence>
                                            {field.state.value.map((member, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 10 }}
                                                    className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 group relative"
                                                >
                                                    <input
                                                        value={member.name}
                                                        onChange={(e) => {
                                                            const newCast = [...field.state.value];
                                                            newCast[index].name = e.target.value;
                                                            field.handleChange(newCast);
                                                        }}
                                                        className="flex-1 h-9 px-3 rounded-md border border-white/10 bg-[#161B22] text-sm focus:outline-none focus:border-[#EAB308]/50"
                                                        placeholder="Name"
                                                    />
                                                    <input
                                                        value={member.role}
                                                        onChange={(e) => {
                                                            const newCast = [...field.state.value];
                                                            newCast[index].role = e.target.value;
                                                            field.handleChange(newCast);
                                                        }}
                                                        className="flex-1 h-9 px-3 rounded-md border border-white/10 bg-[#161B22] text-sm focus:outline-none focus:border-[#EAB308]/50"
                                                        placeholder="Role"
                                                    />
                                                    {field.state.value.length > 1 && (
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => {
                                                                const newCast = field.state.value.filter((_, i) => i !== index);
                                                                field.handleChange(newCast);
                                                            }}
                                                            className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-red-500/20 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white border border-red-500/20"
                                                        >
                                                            <Trash2 className="w-3 h-3" />
                                                        </Button>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    )}
                                </form.Field>
                            </div>
                        </section>

                        <div className="pt-6 border-t border-white/5">
                            <form.Subscribe
                                selector={(s) => [s.canSubmit, s.isSubmitting] as const}
                            >
                                {([canSubmit, isSubmitting]) => (
                                    <AppSubmitButton
                                        isPending={isSubmitting}
                                        disabled={!canSubmit}
                                        className="w-full h-12 text-lg font-bold bg-[#EAB308] hover:bg-[#EAB308]/90 text-black shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                                    >
                                        Launch Media
                                    </AppSubmitButton>
                                )}
                            </form.Subscribe>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default AddMediaForm;
