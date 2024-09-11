export interface Comment {
  id: string;
  post_id: string;
  description: string;
}

export interface CommentCreateDto {
  post_id: string;
  description: string;
}
