const url = 'https://jsonplaceholder.typicode.com/posts'
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const ServerComp = async () => {
  let data: Post[] = [];
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
  }

  return (
    <div className="space-y-6">
      <ul className="grid grid-cols-3 gap-5">
        {data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerComp
