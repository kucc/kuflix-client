export interface QuoteModel {
  id: number;
  content: string;
  author: string;
  createdDateTime: string;
  //   subjectId: number;
  //   authorId: number;
}

export interface QuotePreview {
  id: number;
  content: string;
}

export interface PostQuoteBody {
  content: string;
}
