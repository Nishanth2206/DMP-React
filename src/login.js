import React from "react"
import { Link } from "react-router-dom";
import './login.css'
import axios from "axios";

function Login(){
    const CheckLogin=()=>{
        const user=document.getElementById('user').value;
        const pass=document.getElementById('pass').value;
        if(user&&pass.length>5)
            {
                
                axios.get("http://localhost:3000/User")
                .then((res)=>
                    {
                           const data=res.data;
                           console.log(data);
                           if(data.find(obj => obj.email === user))
                           {
                              let index=data.findIndex(obj => obj.email === user);
                              
                              if(data[index].password === pass)
                              {
                                window.location.href='/home';
                              }
                              else{
                                alert("Invalid password");
                              }
                           }
                           else
                           {
                            alert("User not found");
                            
                           }
                        
                    })
                    .catch((error)=>
                    {
                        console.log(error);
                    })
                
            }
    }
return(
<div class="container">
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" id="user" required/>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" id="pass" required/>
            </div>

          
           <button type="submit" class="btn" onClick={CheckLogin}>Login</button>
            <div class="register-link">
                <p>Don't have an account?<a href="/signup">Register here</a></p>
            </div>
        </form>
    </div>
)
}
export default Login;