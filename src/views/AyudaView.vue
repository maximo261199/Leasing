<template>
    <div class="contenedor ">
        <div class="menu1 ">
            <div class="position-absolute top-0 start-0 badge  logo " >
                <div class=" mb-2 ">
                    <img src="../components/icons/logo1.png" />
                </div>

                <div class="Opciones mb-2">
                    <div class="p-1">
                        <RouterLink to="/" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">Inicio
                        </RouterLink>


                    </div>
                    <div class="p-1">
                        <RouterLink to="/leasing" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">Leasing
                        </RouterLink>
                    </div>
                    <div class="p-1">
                        <RouterLink to="/historial" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">Historial
                        </RouterLink>
                    </div>


                </div>
            </div>


            <div class="AyudaUsuario position-absolute bottom-0 start-0 translate-midedl badge  logo ">
                <hr class="mt-5 ">
                <div class=" text-white w-100 bg-white">
                    <RouterLink to="/home/ayuda" type="button" class="btn btn-lg w-100 text-dark bg-white">Ayuda</RouterLink>
                </div>
                <div class=" text-white w-100 ">
                    <RouterLink to="/home/configuracion" type="button" class="btn btn-lg w-100 text-white">Configuracion
                    </RouterLink>
                </div>
                <div class=" text-white w-100 ">
                    <RouterLink to="/login" type="button" class="btn btn-lg w-100 text-white">Cerrar Sesion</RouterLink>
                </div>

            </div>

        </div>
        <div class="menu2">
            <div class="tituloSuperior">
                <h2>CONFIGURACION</h2>
                <RouterLink to="/home/usuario" type="button" class="btn btn-lg text-dark bg-white "><h2>Usuario</h2></RouterLink>
            </div>

            <div class="fondo">
                <div class="dentro">
                    <div>
                        <img  class="ayuda" src="../components/icons/ayuda.png"/>
                     </div>
                
            </div>     
            
    
            </div>
        </div>
    </div>
</template>

<script setup>
const nombre = "fulanito"
</script>

<style  scoped>
.contenedor {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(61, 87, 126);
}

* {
    margin: 0;
    padding: 10px;
}

.menu1 {
    width: 25%;
background-color: rgb(32, 78, 161);
padding: 10px;   
text-align: center;
padding: 20px;
height: 100%;
}
.menu2 {
    width: 75%;
height: 100%;
text-align:  center;
padding-top: 0;
}

.logo{
    display: flex;
    display: inline-block;
  
    vertical-align: middle;
    padding-left: 5%;
 
  
}



.form-check{
    display: flex;
  justify-content: space-between;
  padding-left: 20%;
  padding-right: 20%;

}

.tituloSuperior{
 display: flex;
 justify-content: space-between;
 height: 10%;
 padding-left: 8%;
 padding-right: 8%;
 background-color: rgb(172, 172, 172);
 color: white;
 align-items: center;

}
.fondo {
    background-color: black;
    height: 91%;
      
}

.datos{
    display: flex;
  justify-content: space-between;
}


.dentro{
    background-color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.ayuda{
    border: solid black 1px;
    width: 90%;
    height: auto;
}
</style>