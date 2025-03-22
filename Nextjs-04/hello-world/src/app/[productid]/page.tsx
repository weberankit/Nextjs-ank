import { Metadata } from "next"

type props={
    params:Promise<{productid:string}>
}


export const generateMetadata=async({params}:props):Promise<Metadata>=>{
const id=(await params).productid
const title= await new Promise((resolve)=>{
    setTimeout(()=>{
     resolve(`iphone ${id}`)
    },1000)
})

return{
    title:`Product ${title}`
}
}


//or {params}:{params:Promise<{productid:string}>}
export  default async function Products({params}:props){
  const{productid}= await params
  
return(
<>
{productid} is kingh
</>
    )
}