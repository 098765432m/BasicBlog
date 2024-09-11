import { Post } from "../type/post.interface";
import CommentList from "./CommentList";

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  return (
    <div className="">
      <h1>Tên Post: {post.name}</h1>
      <p>Nội dung: {post.description}</p>

      <CommentList post_id={post.id}></CommentList>
    </div>
  );
}
