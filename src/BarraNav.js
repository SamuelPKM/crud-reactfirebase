import React from 'react'
//import ReactDOM from 'react-dom'
import ShowUsers from './ShowUsers';
import AddUsers from './AddUsers'


function BarraNav() {
    
   

    return (<div className ="BarraNav">
        
        <nav class="navbar navbar-light bg-dark ">
          <form class="container-fluid justify-content-center">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Anadir un Usuario</button>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Ver Mis Usuarios</button>
            {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Vista previa</button> */}
          </form>
        </nav>
        
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                <AddUsers/>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body">
                <ShowUsers/>
              </div>
            </div>
          </div>
        </div>
      

  
    </div>
    ); 
  }

export default BarraNav;
