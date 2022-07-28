import React from "react";
import { useEffect,useState } from "react";
import {useHistory}from 'react-router-dom';
import {Header} from "./Header";
function logIn()
{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('')
    const history=useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-Info')){
            history.push("/.add")
        }
    },[])
    async function login(){
        console.warn(email, password);
        let item={email, password};
        let result=await fetch("  http://localhost:3000/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(item)
        })
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/.add")
    }
return(
    <div>
        <Header />
        <h1>Login Page</h1>
        <div className="col-sm-06 offset-sm-3">
            <input type="text" placeholder="email" onRateChange={(e)=>setEmail(e.target.value)} className="form-control" />
            <br>
            <input type="password"  placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
            <button className="btn btn-primary" onClick={login}>LogIn</button>
            </br>
        </div>
        </div>
)
}
export default logIn;