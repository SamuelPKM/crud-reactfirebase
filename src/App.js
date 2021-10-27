import React from 'react'
//import ReactDOM from 'react-dom'
import { useState, useEffect} from 'react';
import './App.css';
import {DB} from './firebase-config'
import {collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore'
import bootstrap from 'bootstrap';


function App() {
    const [newNname,setnewNname] = useState("");
    const [newProfesor,setnewProfesor] = useState("");
    const [newEscuela,setnewEscuela] = useState("");
    const [newUDA,setnewUDA] = useState("");
    const [newGrupo,setnewGrupo] = useState("");

    const [Usuarios, setUsers] = useState([]);
    const usersCollectionRef = collection(DB, "Usuarios")

    const createUser = async ()=>{
      //Importante el nombre de los campos, deben mandarse tal cual escritos para poderlos leer en la parte de mostrar nodo
      await addDoc(usersCollectionRef, {Nickname: newNname, Escuela: newEscuela, ID_Profesor: newProfesor, Unidad: newUDA, Grupo: newGrupo})
    }
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

    return (<div className ="App">

      <div class="form-group">
        <label for="">Nickname</label>
        <input type="text"
          class="form-control" name="Nickname" id="" aria-describedby="helpId" placeholder="Dame tu nombre de usuario " 
          onChange={(event) => {setnewNname(event.target.value);
          }}>
        </input>
        <br></br>
        <small id="helpId" class="form-text text-muted">Aqui debes insertar tu nombre de usuario</small>
        <br></br>
        <label for="">Escuela</label>
        <input type="text"
          class="form-control" name="Nickname" id="" aria-describedby="helpId" placeholder="Escuela " 
          onChange={(event) => {setnewEscuela(event.target.value);
          }}>
        </input>
        <br></br>
        <small id="helpId" class="form-text text-muted">Aqui debes insertar el nombre de tu Escuela</small>
        <br></br>
        <label for="">Grupo</label>
        <input type="text"
          class="form-control" name="Nickname" id="" aria-describedby="helpId" placeholder="Grupo " 
          onChange={(event) => {setnewGrupo(event.target.value);
          }}>
        </input>
        <br></br>
        <small id="helpId" class="form-text text-muted">Aqui debes insertar el nombre de tu Grupo</small>
        <br></br>
        <label for="">Profesor</label>
        <input type="text"
          class="form-control" name="Nickname" id="" aria-describedby="helpId" placeholder="Profesor " 
          onChange={(event) => {setnewProfesor(event.target.value);
          }}>
        </input>
        <br></br>
        <small id="helpId" class="form-text text-muted">Aqui debes insertar tu identificador de Profesor</small>
        <br></br>
        <label for="">Unidad</label>
        <input type="text"
          class="form-control" name="Nickname" id="" aria-describedby="helpId" placeholder="Unidad " 
          onChange={(event) => {setnewUDA(event.target.value);
          }}>
        </input>
        <br></br>
        <small id="helpId" class="form-text text-muted">Aqui debes insertar tu Unidad</small>
        <br></br>
        <button type="submit" class="btn btn-primary" onClick={createUser}>Enviar</button>
      </div>

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
    </div>
    ); 
  }

export default App;
