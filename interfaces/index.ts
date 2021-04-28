// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Info = {
  id: number,
  title: string,
  original_title: string,
  overview: string,
  release_date: string,
  vote_average: number,
  genre_ids: object,
  poster_path: string | null,
}

export type Review = {
  id: number,
  title: string,
  content: string,
  writer?: number,
}

export type Quote = {
  id: number,
  content: string,
  writer?: number,
}