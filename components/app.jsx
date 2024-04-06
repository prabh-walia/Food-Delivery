import Homepage from "./Homepage/Homepage"
import Header from "./header/header"
import Footer from "./footer/footer"
import { useOnlineStatus } from "../utils/data/useOnlineStatus"
import { Outlet } from "react-router-dom"

export default  function app (){

   const status = useOnlineStatus();

     
    return (
      <div id="app">
         <Header status = {status}/>
         {
           status==false ? <div style={{padding:"9em"}}>You are disconnected. Please check your internet connection</div> : <Outlet/>
         }
 
         <Footer/>

      </div>
    )




}