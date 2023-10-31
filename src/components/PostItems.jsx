import React from "react";
import MyButton from "./UI/button/MyButton";

function PostItems(props) {
  return (
    <div
      style={{
        border: "2px solid #6A48D7",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
      }}
    >
      <h3>
        Post {props.id}: {props.post.title}
      </h3>
      <p>{props.post.body}</p>
      <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
    </div>
  );
}

export default PostItems;
