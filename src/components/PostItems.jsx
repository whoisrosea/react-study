import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

function PostItems(props) {
  const router = useNavigate();

  return (
    <div
      style={{
        border: "2px solid #6A48D7",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h3>
        Post {props.id}: {props.post.title}
      </h3>
      <p>{props.post.body}</p>
      <MyButton
        style={{ marginBottom: 8 }}
        onClick={() => router(`/posts/${props.post.id}`)}
      >
        open
      </MyButton>
      <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
    </div>
  );
}

export default PostItems;
