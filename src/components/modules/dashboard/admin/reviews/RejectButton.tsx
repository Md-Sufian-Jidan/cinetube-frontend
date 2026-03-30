"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";
import { updateReviewStatus } from "@/app/(dashboardLayout)/admin/reviews/_actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function RejectButton({ review }: { review: any }) {
    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: () => updateReviewStatus(review.id, "UNPUBLISHED"),
        onSuccess: () => {
            toast.success("Review rejected successfully!");
            queryClient.invalidateQueries({ queryKey: ["pending-reviews"] });
        },
        onError: () => {
            toast.error("Failed to update review.");
        },
        onMutate: () => {
            toast.loading("Rejecting review...");
        },
        onSettled: () => {
            toast.dismiss();
        },
    });

    return (
        <Button
            onClick={() => mutateAsync()}
            disabled={isPending || review.status === "PUBLISHED"}
            className="w-full bg-[#EAB308] text-white hover:bg-[#EAB308]/90 font-bold h-9 text-xs uppercase tracking-wider"
        >
            {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <CheckCircle className="mr-2 h-4 w-4" />
            )}
            {isPending ? "Rejecting..." : "Reject"}
        </Button>
    );
}