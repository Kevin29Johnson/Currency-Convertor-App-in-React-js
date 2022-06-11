import "./styles.css";
import React,{useState} from "react"

export default function App() {
  const [value,setValue]=useState(0);
  const [currency,setCurrency]=useState("Rupees");
  const[currency2,setCurrency2]=useState("Dollars");
  function handleChange(e){
    setValue(e.target.value)
  }
  function handleCur(e){
     setCurrency(e.target.value)
  }
  function handleCur2(e){
    setCurrency2(e.target.value)
 }
  return (
    <div className="App">
      <h1>Currency Convertor App</h1>
     <select value={currency} onChange={handleCur} >  
    <option value="Rupees">Rupees(₹)</option>
    <option value="Dollars">Dollars($)</option>
     </select>
     <select value={currency2} onChange={handleCur2} >  
    <option value="Rupees">Rupees(₹)</option>
    <option value="Dollars">Dollars($)</option>
     </select>
    
      <br/>
      <br/>
       {currency===currency2 ?<h2>please select 2 different currencies</h2>:<h2>You want to convert {currency} to {currency2}</h2>}
       <h2>Enter value</h2>
     <input placeHolder="Enter value" value={value} onChange={handleChange}></input>
     <button>convert</button>
     {
        currency==="Rupees"?<h2>Converted: {value*0.013}  {currency2}</h2>:<h2>Converted: {value*78.18}  {currency2}</h2>
      }

    </div>
  );
}
