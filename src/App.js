import React , {useState} from "react";
import './App.css';
import BasicForm from './components/BasicForm/BasicForm';

function App() {
  const adminDetails={
    username: "task@gmail.com", 
    password: "12345678"
}

  const [user,setUser] = useState({name:"", email:""})
  const [error,setError] = useState("")

  const login = details =>{
    //console.log(details)

    if((details.email === adminDetails.username) && (details.password === adminDetails.password)){
      // console.log("Logged In")
      setUser({
        name:"Task",
        email: details.email
      })
    }

    else{
      // console.log("Can't log In")
      setError("Inavlid Email or Password")
    }
  }

  const handleLogout = ()=>{
    setUser({name:"", email:""})
  }

  return (
    <div className="app">
      {user.email !== "" ? <div className="login-success">
        <h1>Welcome {user.name} !!</h1>
        <h3>You Have Been LoggedIn Successfully</h3>
        <button onClick={handleLogout}>Log Out</button>
      </div>:<BasicForm Login={login} error={error}/>}
      
    </div>
  );
}

export default App;
