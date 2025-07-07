export interface Review {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  content: string;
}

export interface RatingBreakdown {
  stars: number;
  percentage: number;
  count: number;
}

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  breakdown: RatingBreakdown[];
}
