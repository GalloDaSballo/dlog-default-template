import { usePosts } from "../../context/PostContext"
import {Link} from "react-router-dom"
import { fromImageHashToUrl } from "../../utils/urls"

const HomePage: React.FC = () => {
  const posts = usePosts()
  console.log("posts", posts)
  return (
    <div>
      {posts.map(post => (
              <Link to={`/post/${post.id}`}>
                <div className="Post">
                  <img src={fromImageHashToUrl(post?.imageHash)} alt={post.title}/>
                  <h3>{post.title}</h3>
                </div>
            </Link>
      ))}

    </div>
  )
}

export default HomePage