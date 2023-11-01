import React, { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFliter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { useFetching } from "../hooks/useFetching";
import postService from "../API/PostService";
import { getPageArray, getPageCount } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [visibility, setVisibility] = useState(false);

  const [filter, setFilter] = useState({ query: "", sort: "" });

  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetching, isLoading] = useFetching(async () => {
    const response = await postService.getAll(limit, page);
    console.log(response.headers["x-total-count"]);
    setPosts(response.data);
    setTotalPages(getPageCount(response.headers["x-total-count"], limit));
  });

  let pagesArray = getPageArray(totalPages);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetching();
  };

  useEffect(() => {
    fetching();
  }, [page]);

  return (
    <div style={{ padding: "0px 300px", textAlign: "center" }}>
      <MyButton onClick={() => setVisibility(true)}>создать пост!</MyButton>

      <MyModal visible={visibility} setVisible={setVisibility}>
        <PostForm create={createPost} setVisible={setVisibility} />
      </MyModal>

      <hr style={{ margin: "10px 0px" }} />

      <PostFliter filter={filter} setFilter={setFilter} />

      {isLoading ? (
        <h1>loading.//</h1>
      ) : (
        <PostList
          remove={removePost}
          posts={searchedAndSortedPosts}
          title={"список постов"}
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
