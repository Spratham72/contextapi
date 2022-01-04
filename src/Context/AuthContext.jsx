import React from "react";
import {useState,createContext} from "react";
const AuthContext=createContext();

const AuthContextProvider =(({children})=>{
const [isAuth, isAuthState]=useState(false);
const [token,tokenState]=useState('');
const toggleAuth=()=>{
   
    fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify({"email": "eve.holt@reqres.in",
        "password": "cityslicka"}),
        headers:{'Content-Type': 'application/json'}
}).then(res=>res.json()).then(res=>{tokenState(res); isAuthState(!isAuth)})
}
   return  <AuthContext.Provider value={{isAuth, toggleAuth,tokenState,token}}>{children}</AuthContext.Provider>
})
export  {AuthContextProvider,AuthContext};