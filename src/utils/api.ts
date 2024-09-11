import { Comment, CommentCreateDto } from "../type/comment.interface";
import { Post, PostCreateDto } from "../type/post.interface";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const generateRandomDelay = () => Math.floor(Math.random() * 800) + 200;

const getPosts = async () => {
  await delay(generateRandomDelay());
  const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
  return posts;
};

const savePost = async (post: PostCreateDto) => {
  console.time("time");

  await delay(generateRandomDelay());
  const posts: Post[] = JSON.parse(localStorage.getItem("posts") || "[]");
  const newPost = {
    id: generateRandomId(6),
    ...post,
  };
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));
  console.timeEnd("time");
};

const getComments = async () => {
  await delay(generateRandomDelay());
  const comments: Comment[] = JSON.parse(
    localStorage.getItem("comments") || "[]"
  );
  return comments;
};

const saveComment = async (comment: CommentCreateDto) => {
  console.time("time");

  await delay(generateRandomDelay());
  const comments: Comment[] = JSON.parse(
    localStorage.getItem("comments") || "[]"
  );
  const newComment = {
    id: generateRandomId(6),
    ...comment,
  };
  comments.push(newComment);
  localStorage.setItem("comments", JSON.stringify(comments));
  console.timeEnd("time");
};

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
