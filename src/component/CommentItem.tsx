import { Comment } from "../type/comment.interface";

interface Props {
  comment: Comment;
}

export default function CommentItem({ comment }: Props) {
  return <div className="">Nội dung: {comment.description}</div>;
}
