const url = 'https://jsonplaceholder.typicode.com/posts'
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const ServerComp = async () => {
  const res = await fetch(url)
  const data: Post[] = await res.json()

  return (
    <div className="space-y-6">
      <ul className="grid grid-cols-3 gap-5">
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServerComp
