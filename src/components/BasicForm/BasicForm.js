import React, {useState} from "react";

import './styles.css'

const BasicForm = (props)=>{
 let {Login, error} = props

 const [details, setDetails] = useState({name:"", email:"", password: ""})

 const handleSubmit = event =>{
    event.preventDefault();

    Login(details)
 }

 const changeEmailHandler=(e)=>{
     setDetails({...details,email: e.target.value})
 }

 const changePasswordHandler = (e)=>{
    setDetails({...details,password: e.target.value})
 }

    return(
        <div className="login-form">
            <form action='' onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error !=="" ? <div className="error">{error}</div>: null}
                <div>
                <label htmlFor="email">Email</label>
                <input type='text' name="email" id="email" onChange={(e)=>changeEmailHandler(e)} value={details.email}/>
                </div>


                <div>
                <label htmlFor="password">Password</label>
                <input type='password' name="password" id="password" onChange={(e)=>changePasswordHandler(e)} value={details.password}/>
                </div>

                <div className="container">
                <input type="submit" value="Login"/>
                </div>

            </form>
        </div>
    )
}

export default BasicForm