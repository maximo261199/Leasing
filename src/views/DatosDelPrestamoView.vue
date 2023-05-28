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
      <div
        class="bg-[#acacac] flex justify-between px-[8%] py-6 uppercase text-white font-bold"
      >
        <h2>Mi Vivienda 2</h2>
        <RouterLink to="/home/usuario" type="button"> Usuario </RouterLink>
      </div>

      <div class="w-11/12 mx-auto flex flex-col h-[85%] justify-between">
        <form>
          <h2 class="font-bold my-3 uppercase text-2xl">Credito Hipotecario</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-[#acacac] p-3 rounded-xl">
              <h2 class="uppercase font-bold">Datos del prestamo</h2>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Precio de Venta</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="precioDeVenta"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Frecuencia de Pagos</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.00000001"
                    min="0"
                    id="input"
                    v-model="FrecuenciaDePagos"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Couta Inicial %</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.00000001"
                    min="0"
                    id="input"
                    v-model="coutaInicial"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Bono MiVivienda</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.00000001"
                    min="0"
                    id="input"
                    v-model="BonoVivienda"
                  />
                </div>
              </div>
            </div>

            <div class="bg-[#acacac] p-3 rounded-xl">
              <h2 class="uppercase font-bold">Costes/gastos Iniciales</h2>
              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Costos Notariales</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.00000001"
                    min="0"
                    id="input"
                    v-model="CostosNotariales"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Costos Registrales</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="CostosRegistrales"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Tasación</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="Tasacion"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Comisión de estudio</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="ComisionDeEstudio"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Comision de act </label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="ComisionDeActivacion"
                  />
                </div>
              </div>
            </div>

            <div class="bg-[#acacac] p-3 rounded-xl">
              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Comision periodica</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="ComisionPeriodica"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Portes</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="Portes"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Gastos de Administracion</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="GastosAdministrativos"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">Gastos de Administracion</label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="ComisionDeActivacion"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between my-3">
                <label for="inputPRECIO">%de seguro riesgo </label>
                <div>
                  <input
                    class="border border-[#3d577e] rounded-lg"
                    type="number"
                    step="0.01"
                    min="0"
                    id="input"
                    v-model="seguroDeRiesgo"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div class="flex justify-around">
          <RouterLink
            to="/home/prestamo/calculo"
            type="button"
            class="uppercase font-bold bg-[#204ea1] text-white px-4 py-2 rounded-lg"
            >Calcular</RouterLink
          >

          <button
            class="uppercase font-bold bg-[#204ea1] text-white px-4 py-2 rounded-lg"
            @click="add(lista)"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  text-align: center;
}
</style>
