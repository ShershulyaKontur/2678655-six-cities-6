import { Host } from './common';

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}

export type Reviews = Review[];

