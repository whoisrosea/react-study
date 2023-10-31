import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log('function done it')
    if (sort) {
      return [...posts].sort((a, b) =>
        a[sort].localeCompare(b[sort])
      );
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post =>{ return (post.title.toLowerCase().includes(query) || post.body.toLowerCase().includes(query))})
  }, [query, sortedPosts])

  return( searchedAndSortedPosts )
}