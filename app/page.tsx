"use client";

import {  useState } from "react";
import AddEmp from "@/app/components/ui/addEmp";




export default function Page() {
  let data = "manu";
  const [name, setName] = useState("Vikram");
  const apple = () => {
    setName("Vikram Handa");
  };
  const InnerComp = () => {
    return <div>inner Component</div>;
  };
  return (
    <div>
      <div className="grid flex">
        <AddEmp/>
       
      {/* <DialogDemo/>
      <DrawerDemo/>
      <CarouselDemo/>
      <SheetDemo /> */}
      </div>
      <h1>my name is {name}</h1>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <InnerComp />
      {/*   */}
    </div>
  );
}
