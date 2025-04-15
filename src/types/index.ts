export interface Crew {
  name: string;
  images: { png: string; webp: string };
  bio: string;
  role: string;
}
export interface Desination {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}
export interface Technology {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}
