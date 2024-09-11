import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getPosts, savePost } from "../utils/api";
import { Post } from "../type/post.interface";

export default function PostList() {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, [posts]);

  return (
    <div>
      <h1>Post List</h1>
      {posts.length > 0 ? (
        posts.map((post: Post) => <PostItem post={post}></PostItem>)
      ) : (
        <div>Rỗng</div>
      )}
      <input
        type="text"
        placeholder="Tên post"
        onChange={(e) => setPostName(e.target.value)}
        value={postName}
      />
      <br />
      <textarea
        value={postDescription}
        placeholder="Nội dung post"
        onChange={(e) => setPostDescription(e.target.value)}
      ></textarea>
      <button
        onClick={() =>
          savePost({ name: postName, description: postDescription })
        }
      >
        Lưu
      </button>
    </div>
  );
}
