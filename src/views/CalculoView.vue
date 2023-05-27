<script setup>
import { useCalculosStore } from "../stores/calculos";
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
          <h2 class="mt-1"><b>Resultados</b></h2>
          <h3>{{ as1 }}</h3>

          <h3>Aqui estan los datos</h3>
          <h4>precio de venta {{ precioDeVenta }}</h4>
          <h4>Frecuencia de pagos {{ FrecuenciaDePagos }}</h4>
          <h4>couta inicial {{ coutaInicial }}</h4>
          <h4>Suma : {{ suma }}</h4>

          <!--
                 <RouterLink to="/home/prestamo/calculo/calculoII" type="button" class="text-white bg-info mt-3 w-25 ">Calcular</RouterLink>
                  -->
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Suma</th>
                <th scope="col">Resta</th>
                <th scope="col">divicion</th>
                <th scope="col">multiplicacion</th>
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
  </div>
</template>

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
