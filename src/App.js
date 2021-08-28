import React,{ useState} from "react";
import axios from "axios";
const App =()=>{
    const [data,setData]=useState({
        username :'',
        password :'', 
    })
    const {username,password}=data;
    const handler =e=>{
        setData( {...data,[e.target.name]:e.target.value})

    }
    const submitHandler =e=>{
        e.preventDefault();
        axios.post("https://signup-form-in-reactjs-default-rtdb.firebaseio.com/register.json",data).then(()=>alert("submited succesfully")) 

        console.log(data);
    }
    return (
        <div>
            <center>
            <form onSubmit={submitHandler}>
            <input type= "text" placeholder="username" name="username"value={username} onChange={handler}   /> <br/>
            <input type="password"placeholder="password"name="password"value={password}onChange={handler} /> <br/>
            <input type ="submit" name="submit"/>
            </form>
            </center>
        </div>
    );
}
export default App;