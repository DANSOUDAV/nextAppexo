//import Image from "next/image";
import { Inter } from "next/font/google";
import {useState,useEffect} from "react"

import Header from "./conpoment/header"
import handler from "./api/hello";
import Style  from "../styles/todolist.module.css";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [prenom, setPrenom]= useState("Amox")
  
  const [nombre, setNombre] = useState(0)

  
  const addValue= ()=>{
    setTab(prev =>{
      return[...prev, 4]
    })
  }
  
  const updatePrenom =()=>{
    setPrenom("Marc");
  }

  const updateNombre =()=>{
    setNombre(n => n+1);
  }
  const [tache,setTache] = useState("")
  const [tab, setTab] = useState([])
  

  const handlerChange =(e) =>{
    setTache(e.target.value)
  }
  const addTache =() =>{
    setTab(prev =>{
      return [...prev, {id: prev.length+1, tach: tache} ]
    })
    setTache("")
  }
  const deleteTask =(id)=>{
    const newTab = tab.filter((item)=> item.id != id)
    setTab(newTab)
  }
  return (
   <div>
     <Header/>
    <h1>Salut {prenom}</h1>
    <button onClick={updatePrenom} >Modifier le prénom</button>
    <h1>{nombre} </h1>
    <button onClick={updateNombre} >Ajouter</button>
    
    <div className={Style.todolist}>
      <h1>Todolist</h1>
      <label htmlFor="tache">Ajouter une tache:</label>
      <input type="text" id="tache" placeholder="Entrez une tache..." value={tache} onChange={handlerChange} /><br />
      
      {tache &&
        (<button onClick={addTache}>Ajout</button>
      )}
      <h3>Liste des taches</h3>
      <ul>
        {tab.map((item) =>{
          return <li key={item.id} >{item.tach} <button onClick={()=> deleteTask(item.id)} >Supprimer</button> </li>
        })}
      </ul>
    </div>
   </div> 
  )
}
