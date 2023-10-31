import React from "react";
import PostItems from "./PostItems";

function PostList({posts, title, remove}) {

  if(!posts.length){
    return(
      <div>Посты не найдены!</div>
    )
  }

  return(
    <>
    <h1>{title}</h1>
      {
        posts.map((post, index) =>(
          <PostItems remove={remove} number={index + 1} post={post} id={post.id}/>
        ))
      }
    </>
  )
}


export default PostList;
