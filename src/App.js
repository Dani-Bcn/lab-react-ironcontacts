
import "./App.css";
import ArrayContacs from "./contacts.json" 
import React,{useState} from "react";

function App() {
  const[rand, setRand]= useState()
  
  let cuantity
  ArrayContacs.map((e,i)=>{
    cuantity=i
  })
  console.log(cuantity)  

  function randomContacts(){      
    setRand( rand =>Math.floor(Math.random() * cuantity))
   
  }  
  function addContacts(){
   const addcontacts = setContacs(contacts => [...contacts,  {...ArrayContacs[rand]}])
  }
  console.log(rand)
 
  const [contacts, setContacs] = useState([
    ArrayContacs[0],
    ArrayContacs[1],
    ArrayContacs[2],
    ArrayContacs[3],
    ArrayContacs[4],
  ])
  
  return (
  <div className="App">
    <button onClick={()=>randomContacts()}>Search contacts</button>
    <button onClick={()=>addContacts()}>Add contacts</button>
    <h1>IronContacts</h1>
    <table>
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
            <td><img src={e.pictureUrl}/></td>
            <td><h1>{e.name}</h1></td>
            <td><h3>{e.popularity}</h3></td>
            <td>{e.wonOscar? <h3>🏆</h3>:null }</td>
            <td>{e.wonEmmy? <h3>🏆</h3>:null }</td>          
          </tr>
        )
      })}
    </table> 
  </div>
  )
}
export default App;
