import { usePosts } from "../../context/PostContext"
import { fromImageHashToUrl } from "../../utils/urls"

const SingPost: React.FC<{match: any}> = ({match}) => {
  const posts = usePosts()
  const found = posts.find(post => post.id === match.params.id)
  return (
    <div className="SinglePost">  
      <img src={fromImageHashToUrl(found?.imageHash)} alt={found?.title}/>
        <h2>
          {found?.title}
        </h2>
        
        <p>{found?.content}</p>
    </div>
  )
}

export default SingPost