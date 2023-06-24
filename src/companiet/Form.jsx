import React, { Fragment, useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

const Form=()=>{

    const [user,setUser]=useState("")
    const [password,setPassword]=useState()
    const [email,setEmail]=useState("")
    
    const type=()=>{
        const password=document.querySelector("#password")
        if(password.type==="password"){
            password.type="text"
        }else{
           password.type="password"
        }
    }



    const form=(e)=>{
        e.preventDefault()
        console.log(e)
        const information={user,password,email}
        console.log(information)
        setEmail("")
        setUser("")
        setPassword("")
    }
    return <Fragment>
        <form className="form_user" action="#" onSubmit={form}>
            <div className="form">
                <div className="form_div">
                    <label className="lbl_user" htmlFor="user">User Name</label>
                    <input  value={user} className="inp" type="text" onChange={(e)=>{
                        setUser(e.target.value)
                        }} />
                </div>
                <div className="form_div">
                    <label className="lbl_password" htmlFor="password">Password</label>
                        <div className="pas_div">
                            <input   value={password} onChange={(e)=>setPassword(e.target.value)} className="inp" type="password" name="password" id="password" />
                            <label className="lbl_eye_see" htmlFor="password"><AiOutlineEye onClick={()=>{
                                type()
                            }} />
                            <AiOutlineEyeInvisible className="see_none"/></label>
                        </div>
                </div>
                <div className="form_div">
                    <label className="lbl_email" htmlFor="email">Email</label>
                    <input  value={email} onChange={(e)=>setEmail(e.target.value)} className="inp" type="email" name="email" id="email" />
                </div>
            </div>
            <button onClick={()=>{
               
            }} className="form_btn">Log in</button>
        </form>
    </Fragment>
}

export default Form