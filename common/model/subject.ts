import { ReviewPreview } from './review';
import { QuotePreview } from './quote';

export default interface SubjectModel {
  id: number;
  name: string;
  englishName: string;
  posterImageUrl: string;
  director: string;
  releasedDate: string;
  genre: string;
  country: string;
  runningTime: string;
  audienceCount: number;
  score: number;
  description: string;
  reviews: ReviewPreview[];
  famousLines: QuotePreview[];
  favorite: boolean;
}
