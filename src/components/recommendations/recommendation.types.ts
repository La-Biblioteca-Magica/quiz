export type RecommendationType = {
  img: string,
  title: string,
  author: string,
  description: string,
  href: string,
  pages: number,
  genres: Genre[],
};
export type Genre = string;