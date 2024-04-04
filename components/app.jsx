import Homepage from "./Homepage/Homepage"
import Header from "./header/header"
import Footer from "./footer/footer"
import { Outlet } from "react-router-dom"

export default  function app (){


     
    return (
      <div id="app">
         <Header/>
         <Outlet/>
         <Footer/>

      </div>
    )




}