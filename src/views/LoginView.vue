<template>
    <div class="contenedor d-flex justify-content-around">
        <div class="menu ">
          <form @submit.prevent="handleSubmit" class="m-2 p-4 rounded ">
            <div class="d-flex justify-content-around">

              <input class="text-center " type="email"
                     placeholder="Enter your email" v-model.trim="email" >
            </div>

            <div class="d-flex justify-content-around">
              <input class="text-center " type="password"
                     placeholder="Enter your password" v-model.trim="password">
            </div>
            <div class="cuenta">
              <h4>¿no tienes una cuenta?  </h4>


              <RouterLink to="/register"  class="btn btn-lg  p-0 text-primary"><h4>Registrate</h4>
              </RouterLink>

            </div>

            <div class="d-flex justify-content-around">
              <button class="text-center btn btn-primary"
                      type="submit">Iniciar Sesion</button>
            </div>

          </form>



        </div>
    </div>

</template>

<script setup>
import {useRoute, useRouter} from "vue-router/dist/vue-router"
import router from "../router";
import {ref} from 'vue';
import {useUserStore} from "../stores/user";

const userStore = useUserStore()
const email = ref("")
const password = ref("")


const register = () =>{
router.push(`/register`);
}

const handleSubmit = async() => {
  if(!email.value || !password.value){
    return alert('llena los campos')
  }

  await userStore.loginUser(email.value, password.value)

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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

}

.menu2 {
  background-color: white;
  border-color: #181818;
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

.menu2 img{
  margin-top: 20px;
  width:auto;
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