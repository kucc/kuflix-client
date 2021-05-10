export interface SubjectPoster {
  id: number;
  posterImageUrl: string;
}

export interface SubjectSection {
  title: string;
  subjects: SubjectPoster[];
}
