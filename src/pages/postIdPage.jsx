import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import postsService from "../API/PostService";  

const PostIdPage = () => {

  const params = useParams()

  const [post, setPost] = useState({})

  const [fetchPostsById, isLoading] = useFetching(async () => {
    const response = await postsService.getById(params.id);
    setPost(response.data)
  });

  useEffect(() => {
    fetchPostsById(params.id)
  }, [])

  console.log(post)

  return(
    <>
    {
      isLoading 
      ?
      <h1>Loading...</h1>
      :
      <div>
      <h1>stranica posta {params.id}</h1>
        <h1>title: {post.title}</h1>
        <p1>desription: {post.body}</p1>
      </div>
    }
  </>
  )
}

export default PostIdPage;