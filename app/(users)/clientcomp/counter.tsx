import { useState } from "react"

export const Counter =() =>{
    const  [inc, setInc] =useState(0)
    return (<button className="grid " onClick={()=>setInc((prev)=>prev+1)}> Add - {inc}</button>)
} 