<template>
    <div class="contenedor ">
        <div class="menu1 ">
            <div class="position-absolute top-0 start-0 badge  logo" >
                <div class=" mb-2 ">
                    <img src="../components/icons/logo1.png" />
                </div>

                <div class="Opciones mb-2">
                    <div class="p-1">
                        <RouterLink to="/" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">Inicio
                        </RouterLink>


                    </div>
                    <div class="p-1">
                        <RouterLink to="/home/leasing" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">Leasing
                        </RouterLink>
                    </div>
                    <div class="p-1">
                        <RouterLink to="/home/historial" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">Historial
                        </RouterLink>
                    </div>


                </div>
            </div>


            <div class="AyudaUsuario position-absolute bottom-0 start-0 translate-midedl badge  logo ">
                <hr class="mt-5 ">
                <div class=" text-white w-100 ">
                    <RouterLink to="/home/ayuda" type="button" class="btn btn-lg w-100  text-white">Ayuda</RouterLink>
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
                <RouterLink to="/home/usuario" type="button" class=" text-white "><h2>Usuario</h2></RouterLink>
            </div>

            <div class="fondo">
                <div class="dentro">
                    <div>
                        <img class="foto border border-dark"  src="data:image/jpeg;base64,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" />
                    </div>

                    <div class="datos">
                        <h2><b>Nombre de Usuario: </b>fulanito  </h2> 
                        <button class="btn btn-lg text-white bg-primary ">Editar</button>
                    </div>

                    <div class="datos">
                        <h2><b>Correo: </b>fulanito@gmail.com </h2> 
                        <button class="btn btn-lg text-white bg-primary ">Editar</button>
                    </div>

                    <div class="datos">
                        <h2><b>RUC: </b>2010456445  </h2> 
                        <button class="btn btn-lg text-white bg-primary ">Editar</button>
                    </div>
                    <RouterLink to="/" type="button" class="btn btn-lg text-white bg-primary "><h2>Volver al menu principal</h2></RouterLink>
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

.logo{
    display: flex;
    display: inline-block;
  
    vertical-align: middle;
    padding-left: 5%;
 
  
}

.foto {
border-radius: 55%;

}

.form-check{
    display: flex;
  justify-content: space-between;
  padding-left: 20%;
  padding-right: 20%;

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
    
}
</style>