import React from "react"
import { Link } from "react-router-dom";
import './login.css'
import axios from "axios";

function SignUp(){
    const CheckRegister=()=>{
        const user=document.getElementById('user').value;
        const pass=document.getElementById('pass').value;
        const con=document.getElementById('con').value;
        axios.get('http://localhost:3000/User')
       .then((res)=>
        {
            const data=res.data;
            console.log(data);
            const userData=data.find(obj => obj.email === user)
            if(!userData&&pass.length>5)
            {
                
                if(pass===con)
                {
                    axios.post('http://localhost:3000/User',{
                        email:user,
                        password:pass
                    })
                    .then((res)=>{
                      window.location.href='/';
                    })
                    .catch(err=> console.log(err))
               }
               else{
                alert("Password Mismatch");
               }
            }
            else
            {
                alert("Password must be at least 6");
            }
        })
       .catch((err)=>console.log(err))
    }
return(
<div className="container">
        <form action="">
            <h1>SignUp</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" id="user" required/>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Set Password" id="pass"required/>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Confirm Password" id="con" required/>
            </div>
            <button type="submit" class="btn" onClick={CheckRegister}>SignUp</button>
            <div class="register-link">
                <p>Have an account?<a href="/">Login Here</a></p>
            </div>
        </form>
    </div>
)
}
export default SignUp;