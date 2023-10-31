import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useState } from "react";

const PostForm = ({ create, setVisible }) => {
  
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(post);
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({
      title: "",
      body: "",
    });
    setVisible(false)
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="название поста"
      />
      <MyInput
        value={post.body}
        type="text"
        placeholder="описание"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>создать пост</MyButton>
    </form>
  );
};

export default PostForm;
