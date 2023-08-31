import { useState } from "react";
import {  useNavigate } from "react-router-dom"


function HomePage() {
    const navigate = useNavigate();
    const[value,setvalue] = useState("")
    const handleSubmit=()=>{
        if(value.trim()===''){
           alert("Enter Email");
        }
        else{
            navigate("/Quiz");
        }
           
        
        
        
        
    }
  return (
    
    <div className="start" style={{textAlign:"center"}}>
        <h1 style={{fontSize:"5rem"}}>Welcome to the Quiz App</h1>
        <h1 style={{marginTop:"2rem"}}> To Start the Quiz Fill the details below</h1>
        <section style={{display:"flex",justifyContent:"center"}}>
            <div className="details" style={{padding:"1rem",display:"flex",justifyContent:"center",gap:"2rem",backgroundColor:"beige"}}>
                <input type ="email" placeholder="Enter your email" className="input-email"value={value} onChange={(e)=>{setvalue(e.target.value)}}/>
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </section>
      
    </div>
  )
}

export default HomePage
