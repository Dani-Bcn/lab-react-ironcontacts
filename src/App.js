
import "./App.css";
import ArrayContacs from "./contacts.json" 
import React,{useState} from "react";

function App() {
    let rand 
    let ArrayContacsRest = ArrayContacs.slice(5,ArrayContacs.length)     
    let cuantity = ArrayContacsRest.length  
    const [contacts, setContacts] = useState(
      ArrayContacs.slice(0,5)
    )  
    const addContacts=()=>{  
        rand =Math.floor(Math.random() * cuantity)
        const randomContacts = ArrayContacs[rand]
        //para que no se repitan
        const compare =contacts.includes(ArrayContacs[rand])
        if(!compare){
          setContacts(contacts=>[...contacts,ArrayContacs[rand]])
        } 
      }  
      const orderName=()=>{        
          setContacts(contacts => [...contacts.sort((a,b)=> a.name > b.name ? 1:-1)])
      }
      const orderPopularity=()=>{  
        setContacts(contacts => [...contacts.sort((a,b)=> a.popularity < b.popularity ? 1:-1)])
      }  
      const deletecontac =(id)=>{
        const del = contacts.filter(e=> e.id !== id)
        setContacts(del)
      }
return (
    <div className="App">
      <div className="containerButtons">
          <h1>IronContacts</h1>
          <span>          
            <button onClick={()=>orderName()}>Order for names</button>  
            <button onClick={()=>addContacts()}>Add contac</button>   
            <button onClick={()=>orderPopularity()}>Order for popularity</button>   
          </span>
      </div> 
      <table>
        <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contacts.map((e)=>{
          return(         
            <tr key={e.id}>
              <td><img src={e.pictureUrl} onClick={()=>deletecontac(e.id)}/></td>
              <td><h2>{e.name}</h2></td>
              <td><h3>{e.popularity}</h3></td>
              <td>{e.wonOscar? <img  className="img" src="https://www.freepnglogos.com/uploads/oscar-png/oscar-man-awards-golden-png-0.png"></img>:null }</td>
              <td>{e.wonEmmy? <img  className="img" src="https://www.pngkey.com/png/full/402-4020538_featured-image-emmy-award.png"></img>:null }</td>          
            </tr>
          )
        })}
        </tbody>
      </table> 
    </div>
  )
}
export default App;
