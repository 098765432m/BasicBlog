import { Comment, CommentCreateDto } from "../type/comment.interface";
import { Post, PostCreateDto } from "../type/post.interface";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)); // tạo hàm delay setTimeOut

const generateRandomDelay = () => Math.floor(Math.random() * 800) + 200; // Ngẫu nhiên thời gian 200ms - 1000ms

// Lấy posts từ localStorage
const getPosts = async () => {
  await delay(generateRandomDelay()); //delay
  const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
  return posts;
};

//Lưu post vào localStorage
const savePost = async (post: PostCreateDto) => {
  await delay(generateRandomDelay()); //delay
  const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");

  //Khai gán giá trị post mới
  const newPost = {
    id: generateRandomId(6), //generate id có độ dài là 6
    ...post,
  };
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));
};

// Lấy comments từ localStorage
const getComments = async () => {
  await delay(generateRandomDelay());
  const comments: Comment[] = JSON.parse(
    localStorage.getItem("comments") || "[]"
  );
  return comments;
};

//Lưu comment vào localStorage
const saveComment = async (comment: CommentCreateDto) => {
  await delay(generateRandomDelay());
  const comments: Comment[] = JSON.parse(
    localStorage.getItem("comments") || "[]"
  );
  const newComment = {
    id: generateRandomId(6), //generate id có độ dài là 6
    ...comment,
  };
  comments.push(newComment);
  localStorage.setItem("comments", JSON.stringify(comments));
};

// Tạo id gồm có độ dài là length
function generateRandomId(length: number): string {
  let result = "";
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const characterLength = character.length;
  let counter = 0;
  while (counter < length) {
    result += character.charAt(Math.floor(Math.random() * characterLength));
    counter++;
  }

  return result;
}

export { getPosts, savePost, getComments, saveComment };
