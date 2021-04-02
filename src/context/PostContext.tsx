import { createContext, useContext, useEffect, useState } from "react";
import {Post} from "../types"
import { getFirst100Posts } from "../utils/graphql";

interface PostContextData {
  posts: Post[]
}

const PostContext = createContext<PostContextData>({
  posts: []
});
export default PostContext;

const useFetchPosts = (): Post[] => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getFirst100Posts()
      setPosts(res)
    }
    fetchPosts()
  }, [])

  return posts
}

export const PostContextProvider: React.FC = ({ children }) => {
  const posts = useFetchPosts()

  return (
    <PostContext.Provider value={{posts}}>
      {children}
    </PostContext.Provider>
  )
}


export const usePosts = () => {
  const {posts} = useContext(PostContext)

  return posts
}