import React, { useEffect ,useState} from "react";
import { useLoaderData } from "react-router";

function Github()
{
  const data=useLoaderData();
//   const [data,setData]=useState([]);
//   useEffect(()=>{
//   fetch(`https://api.github.com/users/karambitbarrage15`).then(response=>response.json()).then(data=>{
// console.log(data);
// setData(data);
//   })

// },[])
  return(
    <div className="text-center m-4 bg-gray-600 text-white">
Github Followers:{data.followers}
<img src={data.avatar_url}  alt="Git Picture" width={300}/>
    </div>
  )

}
export default Github;
export const githubInfoLoader=async()=>{
 const response=await  fetch(`https://api.github.com/users/karambitbarrage15`)
 return response.json();

}