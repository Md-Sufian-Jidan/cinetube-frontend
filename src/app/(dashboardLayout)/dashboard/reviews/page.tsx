import { MessageSquare } from "lucide-react";
import UserReviews from "@/components/modules/dashboard/user/reviews/UserReviews";
import getUserReviews from "./_actions";
import { ReviewResponse } from "@/types/review.types";

export default async function ReviewsPage() {
    const reviews = await getUserReviews() as ReviewResponse;
    if (!reviews?.data || reviews.data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-white">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                    <MessageSquare className="text-slate-300 w-10 h-10" />
                </div>
                <h2 className="font-playfair text-3xl font-black text-slate-900 mb-2">No reviews yet</h2>
                <p className="text-slate-500 font-medium max-w-xs mx-auto">
                    Share your thoughts on movies you've watched to start building your profile.
                </p>
            </div>
        );
    }

    return (
        <UserReviews reviews={reviews?.data || []} />
    );
}