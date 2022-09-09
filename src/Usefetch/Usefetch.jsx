import { useState,useEffect } from "react";


const useFetch=(request)=>{
    
    let[data,setData]= useState(null);
    let[pending,setPending]=useState(true);
    let [error,setError]=useState(null);

     useEffect(()=>{
     setTimeout(()=>{
     fetch(request)
    .then( (response)=>{
       if(response.ok===false)
       {
          throw Error("Sorry for inconvenience Data not found Try again after some time") 
    
        }
        else{
         return(response.json());        
        }

       })

   // .then((response)=>{ return (response.json());})
    .then((data)=>{ setData(data); setPending(false); })
    .catch((error)=>{setError(error.message); setPending(false);})

    }, 1000);
    
}, [ ]);


return {data, pending, error};
}
export default useFetch;





