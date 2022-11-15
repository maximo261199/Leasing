<template>
  <div class="principal">
   <div class="contenedor ">
       <div class="menu1">
           <div class="logo mb-5">
                   <img src="../components/icons/logo1.png"/>
           </div>

           <div class="Opciones"> 
               <div class="p-2">
        <RouterLink to="/" type="button" class="btn btn-lg w-100 rounded-0 fs-1 text-white">Inicio</RouterLink>
       
        
       </div>
       <div class="p-2">
         <RouterLink to="/" type="button" class="btn btn-lg w-100 rounded-0 fs-1 text-white">Leasing</RouterLink>
       </div>
       <div class="p-2">
         <RouterLink to="/" type="button" class="btn btn-lg w-100 rounded-0 fs-1 text-white">Historial</RouterLink>
       </div>
       <hr class="mt-5 border border-white">

           </div>

           <div class="AyudaUsuario">
               <div class=" text-white w-100 ">
         <RouterLink to="/" type="button" class="btn btn-lg w-100  text-white">Ayuda</RouterLink>
       </div>
       <div class=" text-white w-100 ">
         <RouterLink to="/configuracion" type="button" class="btn btn-lg w-100 text-white">Configuracion</RouterLink>
       </div>
       <div class=" text-white w-100 ">
         <RouterLink to="/" type="button" class="btn btn-lg w-100 text-white">Cerrar Sesion</RouterLink>
       </div>

           </div>

       </div>
       <div class="menu2">
           <div class="tituloSuperior">
               <h2>HISTORIAL</h2>
               <h2>Usuario</h2>
           </div>

           <div class="contenido d-flex justify-content-around text-white">
                  <h4><b>#</b></h4>
                  <h4><b>Nombre del Leasing</b></h4> 
                  <h4><b>Nonto del Leasing</b></h4> 
                  <h4><b>Mas detalles</b></h4> 
           </div>
           <div class="informacion d-flex justify-content-around">
               <table class="table">
 <thead>
   <tr>
     <th scope="col">#</th>
     <th scope="col">First</th>
     <th scope="col">Last</th>
     <th scope="col">Handle</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <th scope="row">1</th>
     <td>Mark</td>
     <td>Otto</td>
     <td>@mdo</td>
   </tr>
   <tr>
     <th scope="row">2</th>
     <td>Jacob</td>
     <td>Thornton</td>
     <td>@fat</td>
   </tr>
   <tr>
     <th scope="row">3</th>
     <td>Larry</td>
     <td>the Bird</td>
     <td>@twitter</td>
   </tr>
 </tbody>
</table>
           </div>
       </div>
   </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const historial = ref([]);
</script>

<style >

.principal{
   background-color: rgb(61, 87, 126);
}

.contenedor{

margin: 30px;
display: flex;
}

.menu1{
width: 25%;
background-color: rgb(32, 78, 161);
padding: 10px;   
text-align: center;
padding: 20px;
}


.menu2{
width: 75%;

text-align:  center;

}

.contenido{
   background-color: rgb(32, 78, 161);
   height: 70px;
   display: flex;
 align-items: center;
 justify-content: center
}

.tituloSuperior{
 display: flex;
 justify-content: space-between;
 height: 60px;
 padding-left: 8%;
 padding-right: 8%;
 background-color: rgb(172, 172, 172);
 color: white;
 align-items: center;

}

.informacion{
   background-color: white;
}


</style>