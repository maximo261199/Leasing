<template>
    <div class="contenedor ">
        <div class="menu ">
            

                <div class="Opciones mb-2">

                    <img src="@/components/icons/logo2.png">
                    <form>
                        <h1>Usuario</h1>
                        <input type="text" id="usuario">
                        <h1>Contraseña</h1>
                        <input type="text" id="usuario">
                        <div class="cuenta">
                          <h4>¿no tienes una cuenta?  </h4>

                        
                       <RouterLink to="/register"  class="btn btn-lg  p-0 text-primary"><h4>Registrate</h4>
                        </RouterLink>
                       
                        </div>
                 
                        
                        <button @click="home" class="btn btn-outline-primary ">ENTRAR</button>
                    </form>

                </div>
            




        </div>
        <div class="menu2">
            <img class="banco"
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Torre_Banco_de_la_Naci%C3%B3n.jpg" alt="">


        </div>
    </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import router from "../router";
import {ref} from 'vue';

const home = () =>{
router.push(`/`);
}

const register = () =>{
router.push(`/register`);
}
</script>

<style  scoped>
.contenedor {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(61, 87, 126);
    display: flex;

}

* {
    margin: 0;
    padding: 10px;
}

.menu {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

}

.menu2 {
    height: 100%;
    width: 50%;
    margin: 0;
    padding: 0;
}




.banco {
    width: auto;
    height: 100%;
    padding: 0;
}

.Opciones img{
  margin-top: 20px;
  width:100%;
  height:auto;
}


.Opciones form{
  padding-top: 50px;
  text-align: center;
}

.Opciones h1{
  padding-top: 30px;
  padding-bottom:30px ;
}
.Opciones form input{
  border-radius: 10px;
  padding: 10px;
  border: none;
  background-color: rgb(237,237,242);
}

.Opciones form button{
  margin-top: 20px;
  margin-bottom: 10px;
}

.Opciones form h4 p{
  color : rgb(76,118,226);
 
}

.Opciones{
  background: white;
  width: 100%;
}

.cuenta{
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>