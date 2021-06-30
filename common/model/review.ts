export interface ReviewModel {
  id: number;
  title: string;
  content: string;
  score: number;
  likeCount: number;
  author: string;
  createdDateTime: string;
  //   subjectId: number;
  //   authorId: number;
  //   categoryIds: number[];
}

export interface ReviewPreview {
  id: number;
  title: string;
  content: string;
}

export interface PostReviewBody {
  score: number;
  title: string;
  content: string;
  reviewSubjectId: number;
  categoryIds: number[];
}
