

function Post({post}) {
    const {body} = post
  return (
    <div className="border border-gray-300 p-4">
         <p>{body}</p>
    </div>
  )
}

export default Post
