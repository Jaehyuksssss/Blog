export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string[];
  tags: string[];
}
