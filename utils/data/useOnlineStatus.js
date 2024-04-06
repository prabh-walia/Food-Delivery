import { useEffect ,useState} from "react";

export const useOnlineStatus =()=>{
    const [status,setStatus]= useState(true);



    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            setStatus(false)
          });
    },[])


    return status
}