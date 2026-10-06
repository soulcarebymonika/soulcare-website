import ReviewForm from "@/components/ReviewForm";

export const metadata = {
  title: "Leave a Review | Soulcare by Monika",
  description:
    "Share your experience with Soulcare. Your words can inspire someone else to take that first step toward healing.",
  alternates: {
    canonical: 'https://www.soulcarebymonika.com/leave-a-review',
  },
};

export default function LeaveAReviewPage() {
  return <ReviewForm />;
}
