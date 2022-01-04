import {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
export const Display=()=>{
    
     let {token}=useContext(AuthContext);
    console.log(token)
   return  <>{token?<div>{token.token}</div>:<h3>Please wait....</h3>}</>
}