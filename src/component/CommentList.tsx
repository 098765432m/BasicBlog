import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { Comment } from "../type/comment.interface";
import { getComments, saveComment } from "../utils/api";

interface Props {
  post_id: string;
}

export default function CommentList({ post_id }: Props) {
  const [newComment, setNewComment] = useState<string>(""); // nội dung comment mới
  const [comments, setComments] = useState<Comment[]>([]); // danh sách comments

  // Fetch danh sách comments
  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments();
      setComments(data);
    };
    fetchComments();
  }, []);

  //Xử lý lưu comment
  const handleSaveComment = async () => {
    await saveComment({ post_id: post_id, description: newComment });

    //Lấy giá trị mới khi cập nhật
    const updatedComments = await getComments();
    setComments(updatedComments);

    // Trả textarea comment mới thành rỗng
    setNewComment("");
  };
  return (
    <div>
      <h4>Bình luận:</h4>
      <div className=" py-4">
        {comments.length > 0 ? (
          comments.map((comment: Comment) => {
            // Chỉ lấy những comment trùng post_id trùng với id của post
            if (post_id === comment.post_id) {
              return <CommentItem comment={comment}></CommentItem>;
            }
          })
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <h5>Thêm bình luận</h5>
        <textarea
          className="border-2 rounded-md w-full"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Nhập bình luận mới vào đây"
        ></textarea>
        <div className="flex justify-center">
          <button onClick={handleSaveComment}>Lưu bình luận</button>
        </div>
      </div>
    </div>
  );
}
