import {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Display } from "./loginStatus";
export const Navbar=()=>{
    const {isAuth,toggleAuth}=useContext(AuthContext);
    console.log(isAuth)
    return <>
    {isAuth?<button onClick={toggleAuth}>log out</button>:<button onClick={toggleAuth}>log in</button>}
    {isAuth?<Display/>:null}
    </>
}