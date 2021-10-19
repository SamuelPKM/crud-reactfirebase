import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect} from 'react';
import './App.css';
import {DB} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'


function App() {
    const [Usuarios, setUsers] = useState([]);
    const usersCollectionRef = collection(DB, "Usuarios")

    useEffect(() => {
      const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      }

      getUsers()
    }, []);

    return <div className ="App"></div>;
    
  }

export default App;
