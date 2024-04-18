import Homepage from "./Homepage/Homepage"
import Header from "./header/Header"
import Footer from "./footer/Footer"

import { useOnlineStatus } from "../utils/data/useOnlineStatus"
import { Outlet } from "react-router-dom"
import { userContext } from "../utils/data/userContext"
import { themeContext } from "../utils/data/themeContext"
import { useState } from "react"
import { Provider, useSelector } from "react-redux"

import { store } from "../utils/data/appStore"
import RootBody from "./root-body"


export default  function app (){

   const status = useOnlineStatus();

const [username,setusername]=useState("prabh")
const themes = ["dark","light"]
     const [theme,setTheme]=useState(themes[0])
     const changeTheme=()=>{
         setTheme(themes.indexOf(theme)==0?themes[1]:themes[0])
     }
    
    return (
      <Provider store={store}>
      <div id="app">
       <themeContext.Provider value ={{theme:theme,changeTheme}}> 
       <userContext.Provider value ={{userLoggedIn : username,setusername}}>
         <Header status = {status}/>
         {
           status==false ? <div style={{padding:"9em"}}>You are disconnected. Please check your internet connection</div> : <RootBody/>
           
         }

         <Footer/>
</userContext.Provider>
</themeContext.Provider>
      </div>
      </Provider>
    )




}
//loadash
//debouncing
//throttling
//react portal
// pollyfill