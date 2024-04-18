import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

export default RootBody =()=>{

    return (
        <div>
            <Outlet/>
     
        </div>
    )
}