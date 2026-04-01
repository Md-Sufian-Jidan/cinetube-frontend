import AddMediaForm from "@/components/modules/admin/AddMediaForm";

export const metadata = {
    title: "Add Media | CinéTube Admin",
    description: "Create and launch new movies or series on the CinéTube platform.",
};

export default function AddMediaPage() {
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 bg-[#0B0E14] min-h-screen">
            <div className="max-w-4xl mx-auto mb-10">
                <nav className="flex mb-4 text-xs font-dm-sans uppercase tracking-[0.2em] text-[#EAB308]/60">
                    <span>Admin</span>
                    <span className="mx-2">/</span>
                    <span className="text-[#EAB308]">Media Management</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">Add New</span>
                </nav>
            </div>
            <AddMediaForm />
        </div>
    );
}