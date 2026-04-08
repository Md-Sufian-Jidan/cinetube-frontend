import AddMediaForm from "@/components/modules/dashboard/admin/add-media/AddMediaForm";

export const metadata = {
    title: "Add Media | CineTube Admin",
    description: "Create and launch new movies or series on the CinéTube platform.",
};

export default function AddMediaPage() {
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto mb-10">
                <nav className="flex mb-4 text-xs font-jakarta uppercase tracking-[0.2em] text-slate-400">
                    <span>Admin</span>
                    <span className="mx-2">/</span>
                    <span className="text-amber-600 font-medium">Media Management</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 font-semibold">Add New</span>
                </nav>
            </div>
            <AddMediaForm />
        </div>
    );
}