// Dummy imports

import { resolve } from "path"
import { Suspense } from "react"
import DataCard from "./datacad"
import Load from "./load"


// app/(users)/datafetch/servercomp/page.tsx

type SearchParams = {
  name?: string
}

const ServerComp = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) => {
  // ✅ unwrap the Promise
  const params = await searchParams
  const name = params?.name

  // optional artificial delay
  // await new Promise<void>((resolve) => setTimeout(resolve, 300))


  return (
    <div className="grid grid-cols-2 gap-3 h-full ">
      <div className="h-full flex justify-center items-center ">
        <h2>
          Hii I am 1st component.In Loading.jsx I have to wait but in Suspense I
          don't. I support partial rendering. This means you can show a fallback
          UI (like a loading spinner or skeleton) for specific components while
          the rest of your application renders and remains interactive.
        </h2>
      </div>
      <Suspense fallback={<Load />}>
        <DataCard userName={name} />
      </Suspense>
    </div>
  );
}

export default ServerComp
