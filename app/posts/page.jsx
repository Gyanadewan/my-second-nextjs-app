import Post from "../components/Post"

const  PostPage = async ()=> {
 const res = await  fetch ("https://jsonplaceholder.typicode.com/posts")
 const posts = await res.json()
  return (
    <div>
        <h1>Post lenght:{posts.length}</h1>
        <div className="grid grid-cols-3 gap-4">
            {
               posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    </div>
  )
}

export default PostPage
