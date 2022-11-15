<template>
    <div class="contenedor ">
        <div class="menu1 ">
            
            <img class="img" src="@/components/icons/logo2.png">
            
            
        </div>
        <div class="menu2">
            <div class="col border-primary formulario ">
            <form>
                <div class="form-group">
                    <label for="userName">User name</label>
                    <input type="name" class="form-control" id="userName" aria-describedby="emailHelp"
                        placeholder="User Name">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div class="form-group">
                    <label for="inputPassword1">Password</label>
                    <input type="password" class="form-control" id="inputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="repitInputPassword1">Repit Password</label>
                    <input type="password" class="form-control" id="repitInputPassword1" placeholder="Repit Password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="Check1 ">Aceptar termino y condiciones</label>
                </div>
                <RouterLink to="/" type="submit" class="btn btn-primary">Iniciar</RouterLink>
               
            </form>
        </div>

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

.menu1 {
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
    background-color: white;
    display: flex;
    text-align: center;
    justify-content: center;
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
  align-items: center;
  background: white;
  margin: 10px;
  float: left;
  width: 50%;
}
</style>