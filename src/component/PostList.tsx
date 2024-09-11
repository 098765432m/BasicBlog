import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getPosts, savePost } from "../utils/api";
import { Post } from "../type/post.interface";
import CardDefault from "./CardDefault";

export default function PostList() {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch danh sách post
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  //Xử lý lưu post
  const handleSavePost = async () => {
    await savePost({ name: postName, description: postDescription });

    const updatedComments = await getPosts();
    setPosts(updatedComments);

    setPostName("");
    setPostDescription("");
  };
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex justify-center">
        <div>
          <h1 className="text-3xl font-bold flex justify-center my-6">
            Post List
          </h1>
          <div className="space-y-6 w-[35rem]">
            {posts.length > 0 ? (
              posts.map((post: Post) => (
                <CardDefault>
                  <PostItem post={post}></PostItem>
                </CardDefault>
              ))
            ) : (
              <div>Rỗng</div>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <CardDefault>
          <div className="space-y-4 w-full">
            <h2 className="flex justify-center">Form Post</h2>
            <input
              type="text"
              placeholder="Tên post"
              onChange={(e) => setPostName(e.target.value)}
              value={postName}
            />
            <br />
            <textarea
              className="w-full"
              value={postDescription}
              placeholder="Nội dung post"
              onChange={(e) => setPostDescription(e.target.value)}
            ></textarea>
            <br />
            <div className="flex justify-center">
              {" "}
              <button onClick={handleSavePost}>Lưu</button>
            </div>
          </div>
        </CardDefault>
      </div>
    </div>
  );
}
