<template>
  <div class="contenedor">
    <div class="menu1">
      <div class="position-absolute top-0 start-0 badge logo">
        <div class="mb-2">
          <img src="../components/icons/logo1.png" />
        </div>

        <div class="Opciones mb-2">
          <div class="p-1">
            <RouterLink
              to="/"
              type="button"
              class="btn btn-lg rounded-0 fs-1 text-white"
              >Inicio
            </RouterLink>
          </div>
          <div class="p-1">
            <RouterLink
              to="/"
              type="button"
              class="btn btn-lg rounded-0 fs-1 text-white"
              >Leasing
            </RouterLink>
          </div>
          <div class="p-1 bg-white">
            <RouterLink
              to="/"
              type="button"
              class="btn btn-lg rounded-0 fs-1 text-dark bg-white"
              >Historial
            </RouterLink>
          </div>
        </div>
      </div>

      <div
        class="AyudaUsuario position-absolute bottom-0 start-0 translate-midedl badge logo"
      >
        <hr class="mt-5" />
        <div class="text-white w-100">
          <RouterLink
            to="/home/ayuda"
            type="button"
            class="btn btn-lg w-100 text-white"
            >Ayuda</RouterLink
          >
        </div>
        <div class="text-white w-100">
          <RouterLink
            to="/home/configuracion"
            type="button"
            class="btn btn-lg w-100 text-white"
            >Configuracion
          </RouterLink>
        </div>
        <div class="text-white w-100">
          <RouterLink to="/" type="button" class="btn btn-lg w-100 text-white"
            >Cerrar Sesion</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="menu2"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const historial = ref([]);
</script>

<style scoped>
.contenedor {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(61, 87, 126);
  display: flex;
}
* {
  margin: 0;
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

.contenido {
  background-color: rgb(32, 78, 161);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tituloSuperior {
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding-left: 8%;
  padding-right: 8%;
  background-color: rgb(172, 172, 172);
  color: white;
  align-items: center;
}

.informacion {
  background-color: white;
}
</style>
