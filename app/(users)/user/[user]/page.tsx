interface PageProps {
  params: {
    user: string
  }
}

const SingleName = async ({ params }: PageProps) => {
  const { user } = params

  console.log("user:", user)

  return <h2>Dynamic = {user}</h2>
}

export default SingleName
