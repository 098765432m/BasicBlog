export interface Post {
  id: string;
  name: string;
  description: string;
}

export interface PostCreateDto {
  name: string;
  description: string;
}
