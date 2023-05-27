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
        <div class="dentro">
          <h2 class="mt-1"><b>Datos De los Costes / Gastos Periodicos</b></h2>
          <form class="m-0 p-0">
            <div class="form-group row pb-0">
              <label for="inputNOTARIALEs" class="col-sm-5 col-form-label"
                >Comision Periodica</label
              >
              <div class="col-sm-5">
                <input
                  type="number"
                  class="form-control"
                  id="inputNotariales"
                  v-model="comisionPeriodica"
                  placeholder="Costo Notariales"
                />
              </div>
            </div>

            <div class="form-group row pb-0">
              <label for="inputSEGURO_RIESGO" class="col-sm-5 col-form-label"
                >% de Seguro Riesgo</label
              >
              <div class="col-sm-4">
                <input
                  type="number"
                  step="0.000001"
                  min="0"
                  max="100"
                  class="form-control"
                  v-model="seguroRiesgo"
                  id="inputseguroRiesgo"
                  placeholder="seguro Riesgo"
                />
              </div>
              <label class="col-sm-1">%</label>
            </div>
          </form>

          <button @click="calculo">Calcular</button>

          <h1 type="number">{{ calc }}</h1>

          <resultado-view v-bind="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//  <Resultado v-bind="datos"></Resultado>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
import router from "../router";
import ResultadoView from "./ResultadoView.vue";

const comisionPeriodica = ref(20.0);
const seguroRiesgo = ref(0.11);
const calc = ref(0);

const calculo = () => {
  calc.value = comisionPeriodica.value * seguroRiesgo.value;
  router.push("/home/prestamo/resultado");
};

const next = () => {};

const post = {
  resultado: comisionPeriodica.value * seguroRiesgo.value,
  result: "My Name Omar",
};
</script>

<style scoped>
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

.fondo {
  background-color: black;
  height: 91%;
}

.dentro {
  background-color: white;
  height: 100%;
}

.columna {
  display: flex;
}

.boto {
  margin-top: 0%;
}
</style>
