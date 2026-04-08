"use client";

import { createMediaAction } from "@/app/(dashboardLayout)/admin/add-media/_actions";
import AppField from "@/components/shared/form/AppField";
import AppSubmitButton from "@/components/shared/form/AppSubmitButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mediaZodSchema } from "@/zod/media.validation";
import { useForm } from "@tanstack/react-form";
import { Plus, Trash2, Film, Clapperboard, Globe, Image as ImageIcon, Users, Tags } from "lucide-react";
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
            // 1. Prepare cleaned data for validation
            const cleanedValues = {
                ...value,
                releaseYear: Number(value.releaseYear),
                genres: value.genres.filter(g => g.trim() !== ""),
                cast: value.cast
                    .map(c => ({
                        name: String(c.name).trim(),
                        role: String(c.role).trim()
                    }))
                    .filter(c => c.name !== "")
            };

            // 2. Validate the cleaned data with Zod
            const validation = mediaZodSchema.safeParse(cleanedValues);

            if (!validation.success) {
                // Show a human-readable error from the first failing field
                const firstError = validation.error.issues[0].message;
                toast.error(`Validation Error: ${firstError}`);
                return;
            }

            try {
                // 3. Send the validated data to the server action
                const res = await createMediaAction(validation.data);

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
            className="py-10 px-4"
        >
            <Card className="w-full max-w-4xl mx-auto bg-white border-slate-200 shadow-xl overflow-hidden">
                <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-100 rounded-lg">
                            <Film className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-bold text-slate-900">
                                Create New Media
                            </CardTitle>
                            <CardDescription className="text-slate-500">
                                Fill in the details to add a new movie or series to CinéTube.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-8 bg-white">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            form.handleSubmit();
                        }}
                        className="space-y-8"
                    >
                        {/* Basic Information Section */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 text-amber-600 mb-4">
                                <Clapperboard className="w-4 h-4" />
                                <h3 className="text-xs font-bold uppercase tracking-widest">Basic Information</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <form.Field
                                    name="title"
                                    validators={{ onChange: mediaZodSchema.shape.title }}
                                >
                                    {(field) => (
                                        <AppField field={field} label="Title" placeholder="e.g. Inception" className="bg-white border-slate-200" />
                                    )}
                                </form.Field>

                                <form.Field
                                    name="releaseYear"
                                    validators={{ onChange: mediaZodSchema.shape.releaseYear }}
                                >
                                    {(field) => (
                                        <AppField field={field} label="Release Year" type="number" placeholder="2024" className="bg-white border-slate-200" />
                                    )}
                                </form.Field>

                                <form.Field
                                    name="director"
                                    validators={{ onChange: mediaZodSchema.shape.director }}
                                >
                                    {(field) => (
                                        <AppField field={field} label="Director" placeholder="e.g. Christopher Nolan" className="bg-white border-slate-200" />
                                    )}
                                </form.Field>

                                <div className="grid grid-cols-2 gap-4">
                                    <form.Field name="type">
                                        {(field) => (
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-700">Type</label>
                                                <Select
                                                    value={field.state.value}
                                                    onValueChange={(v: any) => field.handleChange(v)}
                                                >
                                                    <SelectTrigger className="bg-white border-slate-200 text-slate-900">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white border-slate-200">
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
                                                <label className="text-sm font-medium text-slate-700">Pricing</label>
                                                <Select
                                                    value={field.state.value}
                                                    onValueChange={(v: any) => field.handleChange(v)}
                                                >
                                                    <SelectTrigger className="bg-white border-slate-200 text-slate-900">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white border-slate-200">
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
                                        <label className="text-sm font-medium text-slate-700">Synopsis</label>
                                        <textarea
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            className="w-full min-h-[120px] rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                                            placeholder="Write a brief overview..."
                                        />
                                        {field.state.meta.errors.length > 0 && (
                                            <p className="text-xs text-red-500">{field.state.meta.errors[0]?.message as string}</p>
                                        )}
                                    </div>
                                )}
                            </form.Field>
                        </section>

                        {/* Media Links Section */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 text-amber-600 mb-4">
                                <Globe className="w-4 h-4" />
                                <h3 className="text-xs font-bold uppercase tracking-widest">Media Links</h3>
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
                                            placeholder="https://server.com/..."
                                            className="bg-white border-slate-200"
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
                                            placeholder="https://image.com/..."
                                            className="bg-white border-slate-200"
                                        />
                                    )}
                                </form.Field>
                            </div>
                        </section>

                        {/* Genres Section */}
                        <section className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-amber-600">
                                    <Tags className="w-4 h-4" />
                                    <h3 className="text-xs font-bold uppercase tracking-widest">Genres</h3>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => form.setFieldValue("genres", (prev) => [...prev, ""])}
                                    className="border-slate-200 hover:bg-slate-50 text-slate-600"
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
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    className="flex items-center gap-1 group"
                                                >
                                                    <input
                                                        value={genre}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const newGenres = field.state.value.map((g, i) => i === index ? newValue : g);
                                                            field.handleChange(newGenres);
                                                        }}
                                                        className="h-9 px-3 rounded-md border border-slate-200 bg-white text-sm md:w-[150px] text-slate-900 focus:outline-none focus:border-amber-500 transition-colors"
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
                                                            className="h-9 w-9 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
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
                                <div className="flex items-center gap-2 text-amber-600">
                                    <Users className="w-4 h-4" />
                                    <h3 className="text-xs font-bold uppercase tracking-widest">Cast & Crew</h3>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => form.setFieldValue("cast", (prev) => [...prev, { name: "", role: "" }])}
                                    className="border-slate-200 hover:bg-slate-50 text-slate-600"
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
                                                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100 group relative"
                                                >
                                                    <input
                                                        value={member.name}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const newCast = field.state.value.map((c, i) => i === index ? { ...c, name: newValue } : c);
                                                            field.handleChange(newCast);
                                                        }}
                                                        className="flex-1 h-9 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                                                        placeholder="Name"
                                                    />
                                                    <input
                                                        value={member.role}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const newCast = field.state.value.map((c, i) => i === index ? { ...c, role: newValue } : c);
                                                            field.handleChange(newCast);
                                                        }}
                                                        className="flex-1 h-9 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-amber-500"
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
                                                            className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-white shadow-sm text-red-500 border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
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

                        <div className="pt-6 border-t border-slate-100">
                            <form.Subscribe
                                selector={(s) => [s.canSubmit, s.isSubmitting] as const}
                            >
                                {([canSubmit, isSubmitting]) => (
                                    <AppSubmitButton
                                        isPending={isSubmitting}
                                        disabled={!canSubmit}
                                        className="w-full h-12 text-lg font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20"
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