<script setup>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";

const ResultadoIgv = 122165415;

defineProps({
  resultado: Number,
  result: String,
});
</script>

<template>
  <div class="contenedor1">
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
              to="/home/prestamo"
              type="button"
              class="btn btn-lg rounded-0 fs-1 text-dark bg-white"
              >Leasing
            </RouterLink>
          </div>
          <div class="p-1">
            <RouterLink
              to="/home/historial"
              type="button"
              class="btn btn-lg rounded-0 fs-1 text-white"
            >
              Historial
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
          >
            Configuracion
          </RouterLink>
        </div>
        <div class="text-white w-100">
          <RouterLink
            to="/login"
            type="button"
            class="btn btn-lg w-100 text-white"
            >Cerrar Sesion</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="menu2">
      <div class="tituloSuperior">
        <h2>Leasing</h2>
        <RouterLink to="/home/usuario" type="button" class="text-white">
          <h2>Usuario</h2>
        </RouterLink>
      </div>
      <div class="fondo">
        <div class="dentro p-0">
          <div class="d-flex justify-content-between">
            <div class="col-sm-4 for">
              <h4>Datos de los costos/ gastos periodicos</h4>
              <div></div>
              <div class="d-flex justify-content-around p-1">
                <h5 class="col-sm-4">Seguro de Riesgo</h5>
                <h5 class="borde bg bg-white col-sm-3">{{ resultado }}</h5>
                <span>{{ result }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between"></div>

          <RouterLink
            to="/home/prestamo/calculo"
            type="button"
            class="btn btn-lg text-white bg-info mt-3 w-25"
            >Ver Historial</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor1 {
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  background-color: rgb(32, 78, 161);
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

.logo {
  display: flex;
  display: inline-block;

  vertical-align: middle;
  padding-left: 5%;
}

.ayudaUsuario {
}

.form-check {
  display: flex;
  justify-content: space-between;
  padding-left: 20%;
  padding-right: 20%;
}

form {
  background-color: rgb(192, 192, 203);
  border-radius: 3%;
}

.for {
  background-color: rgb(192, 192, 203);
  border-radius: 3%;
}
.fondo {
  background-color: black;
  height: 91%;
}

.dentro {
  background-color: white;
  height: 100%;
}

.borde {
  border-radius: 5px;
  padding: 0%;
}
</style>
