<template>
  <div class="p-3 gap-3 bg-[#3d577e] flex h-screen">
    <Navbar />
    <div class="w-3/4 bg-white">
      <div
        class="bg-[#acacac] flex justify-between px-[8%] py-6 uppercase text-white font-bold"
      >
        <h2>Mi Vivienda 2</h2>
        <RouterLink to="/home/usuario" type="button"> Usuario </RouterLink>
      </div>

      <div
        class="border-black border-8 flex justify-center items-center h-[90%]"
      >
        <img class="w-3/4" src="../components/icons/ayuda.png" />
        <!-- <img src="../components/icons/bienvenido.png" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";

const nombre = "fulanito";
</script>

<style scoped>
/*.contenedor {
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
  text-align: center;
  padding-top: 0;
}

.logo {
  display: flex;
  display: inline-block;

  vertical-align: middle;
  padding-left: 5%;
}

.form-check {
  display: flex;
  justify-content: space-between;
  padding-left: 20%;
  padding-right: 20%;
}

.tituloSuperior {
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

.datos {
  display: flex;
  justify-content: space-between;
}

.dentro {
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ayuda {
  border: solid black 1px;
  width: 90%;
  height: auto;
}*/
</style>
