"use client"

import { useState } from "react";

export default function ClientPageCheck(){
const [count,setCount]=useState(0)
return(
    <>
    
    {count}
    <button onClick={()=>setCount(count+1)}></button>
    </>
)
}