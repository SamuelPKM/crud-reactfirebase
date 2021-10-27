import React from "react";
import { useState, useEffect} from 'react';
import {DB} from './firebase-config'
import {collection, getDocs,doc, deleteDoc} from 'firebase/firestore'

function ShowUsers() {
    
    const usersCollectionRef = collection(DB, "Usuarios")
    const [Usuarios, setUsers] = useState([]);
    const deleteUser = async(id)=>{
      const userDoc = doc(DB,"Usuarios",id);
      await deleteDoc(userDoc);

    }
    useEffect(() => {
      
      const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setUsers (data.docs.map((doc)=>({...doc.data(), id: doc.id})));
      }
      
      
      getUsers()
    }, []);
    return(<div className="ShowUsers">
         {Usuarios.map((Usuarios) => {
        return <div>
          <br></br>
          <h1>Usuario: {Usuarios.Nickname}</h1>
          <h1>Escuela: {Usuarios.Escuela}</h1>
          <h1>Grupo: {Usuarios.Grupo}</h1>
          <h1>Profesor: {Usuarios.ID_Profesor}</h1>
          <h1>Unidad: {Usuarios.Unidad}</h1>
          <button onClick={() => {deleteUser(Usuarios.id)}}>Eliminar Usuario</button>
        </div>
      })}
    </div>)

}
export default ShowUsers;