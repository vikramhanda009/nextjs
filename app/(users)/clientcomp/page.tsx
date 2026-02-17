"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  body: string;
};

export default function Page() {
  const [postdata, setPostdata] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();
      setPostdata(data);
    };

    fetchPosts();
  }, []);

  return (
    <ul className="grid grid-cols-3 gap-5">
      {postdata.map((curElm) => (
        <li key={curElm.id}>{curElm.body}</li>
      ))}
    </ul>
  );
}
