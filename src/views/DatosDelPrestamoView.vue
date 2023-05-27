<script setup>
import Navbar from "./Navbar.vue";
import { useCalculosStore } from "../stores/calculos";
import { ref } from "vue";

const useCalculo = useCalculosStore();

const { add } = useCalculo;

const precioDeVenta = ref();
const FrecuenciaDePagos = ref();
const coutaInicial = ref();
const BonoVivienda = ref();
const CostosNotariales = ref(6);
const CostosRegistrales = ref(7);
const Tasacion = ref(8);
const ComisionDeEstudio = ref(9);
const ComisionDeActivacion = ref(10);
const ComisionPeriodica = ref(11);
const Portes = ref(12);
const GastosAdministrativos = ref(13);
const seguroDeRiesgo = ref(14);

// falta 1
const lista = ref([
  precioDeVenta,
  FrecuenciaDePagos,
  coutaInicial,
  BonoVivienda,
  CostosNotariales,
  CostosRegistrales,
  Tasacion,
  ComisionDeEstudio,
  ComisionDeActivacion,
  ComisionPeriodica,
  Portes,
  GastosAdministrativos,
  seguroDeRiesgo,
]);
</script>

<template>
  <div class="p-3 gap-3 bg-[#3d577e] flex h-screen">
    <Navbar />

    <div class="w-3/4 bg-white">
      <div class="bg-[#acacac] flex justify-between px-[8%] py-6 uppercase">
        <h2>Mi Vivienda 2</h2>
        <RouterLink to="/home/usuario" type="button"> Usuario </RouterLink>
      </div>

      <div class="fondo">
        <div class="dentro">
          <p class="font-bold">Credito Hipotecario</p>

          <form>
            <div class="container text-center">
              <div class="row">
                <div class="col border border-primary">
                  <h5 class="mt-0 p-0">Datos del prestamo</h5>

                  <div class="form-group row p-0 m-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Precio de Venta</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="precioDeVenta"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0 m-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Frecuencia de Pagos</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.00000001"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="FrecuenciaDePagos"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Couta Inicial %</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.00000001"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="coutaInicial"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-labelp-0 m-0"
                      >Bono MiVivienda</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.00000001"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="BonoVivienda"
                      />
                    </div>
                  </div>
                </div>

                <div class="col border border-primary">
                  <h5 class="mt-0 p-0"><b>Costes/gastos Iniciales</b></h5>
                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Costos Notariales</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.00000001"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="CostosNotariales"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Costos Registrales</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="CostosRegistrales"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Tasacion</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="Tasacion"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Comision de estudio</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="ComisionDeEstudio"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Comision de act
                    </label>
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="ComisionDeActivacion"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row border border-primary">
                <div>
                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Comision periodica</label
                    >
                    <div class="col-sm-3">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="ComisionPeriodica"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Portes</label
                    >
                    <div class="col-sm-3">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="Portes"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Gastos de Administracion</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="GastosAdministrativos"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >Gastos de Administracion</label
                    >
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="ComisionDeActivacion"
                      />
                    </div>
                  </div>

                  <div class="form-group row p-0">
                    <label
                      for="inputPRECIO"
                      class="col-sm-5 col-form-label p-0 m-0"
                      >%de seguro riesgo
                    </label>
                    <div class="col-sm-5">
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        class="form-control col-sm-1 h-100 p-0 m-0"
                        id="input"
                        v-model="seguroDeRiesgo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <RouterLink to="/home/prestamo/calculo" type="button"
            >Calcular</RouterLink
          >

          <button @click="add(lista)">Agregar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #3d577e;
}

.menu1 {
  width: 25%;
  background-color: #204ea1;
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
  background-color: #acacac;
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
</style>
