'use client'

interface PageProps {
  params: {
    user: string
    postid: string
  }
}

const SinglePost = ({ params }: PageProps) => {
  const { user, postid } = params

  console.log("postid:", postid, user)

  return <h2>User Name: {user} Post Dynamic = {postid}</h2>
}

export default SinglePost
