<script setup>
import { useCalculosStore } from "../stores/calculos";
import Navbar from "./Navbar.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const useCalculo = useCalculosStore();

const { datos } = storeToRefs(useCalculo);

const list1 = ref([]);

const precioDeVenta = ref(datos.value.at(0));
const FrecuenciaDePagos = ref(datos.value.at(1));
const coutaInicial = ref(datos.value.at(2));
const BonoVivienda = ref(datos.value.at(3));
const CostosNotariales = ref(datos.value.at(4));
const CostosRegistrales = ref(datos.value.at(5));
const Tasacion = ref(datos.value.at(6));
const ComisionDeEstudio = ref(datos.value.at(7));
const ComisionDeActivacion = ref(datos.value.at(8));
const ComisionPeriodica = ref(datos.value.at(9));
const Portes = ref(datos.value.at(10));
const GastosAdministrativos = ref(datos.value.at(11));
const seguroDeRiesgo = ref(datos.value.at(12));

const suma = precioDeVenta.value + FrecuenciaDePagos.value;
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

      <div class="w-11/12 mx-auto py-5">
        <div
          class="bg-[#204ea1] text-white rounded-lg flex flex-col justify-center items-center uppercase results gap-3 py-4"
        >
          <h2 class="font-bold uppercase text-2xl">Resultados</h2>
          <!-- <p>{{ as1 }}</p> -->

          <p>Aqui estan los datos</p>
          <p>Precio de Venta: {{ precioDeVenta }}</p>
          <p>Frecuencia de Pagos: {{ FrecuenciaDePagos }}</p>
          <p>Cuota Inicial: {{ coutaInicial }}</p>
          <p>Suma: {{ suma }}</p>
        </div>

        <!--
                 <RouterLink to="/home/prestamo/calculo/calculoII" type="button" class="text-white bg-info mt-3 w-25 ">Calcular</RouterLink>
                  -->
        <table class="table border w-full mt-5">
          <thead class="bg-[#acacac]">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Suma</th>
              <th scope="col">Resta</th>
              <th scope="col">División</th>
              <th scope="col">Multiplicación</th>
            </tr>
          </thead>
          <tbody>
            <ul id="example-1">
              <li v-for="item in list1">
                {{ item }}
              </li>
            </ul>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@feohdewf</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results > p {
  font-weight: 700;
}
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
}*/
</style>
