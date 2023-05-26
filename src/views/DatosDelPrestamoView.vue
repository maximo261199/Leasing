<script setup>
import {useCalculosStore} from "../stores/calculos";
import { ref } from 'vue'

const useCalculo = useCalculosStore()

const {add} = useCalculo;




const precioDeVenta =         ref();
const FrecuenciaDePagos =     ref();
const coutaInicial =          ref();
const BonoVivienda =          ref();
const CostosNotariales =      ref(6);
const CostosRegistrales =     ref(7);
const Tasacion =              ref(8);
const ComisionDeEstudio =     ref(9)
const ComisionDeActivacion =  ref(10)
const ComisionPeriodica =     ref(11);
const Portes =                ref(12);
const GastosAdministrativos = ref(13)
const seguroDeRiesgo =        ref(14)

// falta 1
const lista = ref([
    precioDeVenta,
    FrecuenciaDePagos,
  coutaInicial,
  BonoVivienda,
  CostosNotariales,
 CostosRegistrales ,
 Tasacion,
 ComisionDeEstudio ,
 ComisionDeActivacion ,
 ComisionPeriodica,
 Portes ,
 GastosAdministrativos ,
 seguroDeRiesgo
]);




</script>

<template>
    <div class="contenedor ">
        <div class="menu1 ">
            <div class="position-absolute top-0 start-0 badge  logo">
                <div class=" mb-2 ">
                    <img src="../components/icons/logo1.png" />
                </div>

                <div class="Opciones mb-2">
                    <div class="p-1">
                        <RouterLink to="/" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">Inicio
                        </RouterLink>


                    </div>
                    <div class="p-1">
                        <RouterLink to="/home/prestamo" type="button"
                            class="btn btn-lg  rounded-0 fs-1 text-dark bg-white">Mi Vivienda
                        </RouterLink>
                    </div>
                    <div class="p-1">
                        <RouterLink to="/home/historial" type="button" class="btn btn-lg  rounded-0 fs-1 text-white">
                            Historial
                        </RouterLink>
                    </div>


                </div>
            </div>


            <div class="AyudaUsuario position-absolute bottom-0 start-0 translate-midedl badge  logo ">
                <hr class="mt-5 ">
                <div class=" text-white w-100 ">
                    <RouterLink to="/home/ayuda" type="button" class="btn btn-lg w-100  text-white">Ayuda</RouterLink>
                </div>
                <div class=" text-white w-100 ">
                    <RouterLink to="/home/configuracion" type="button" class="btn btn-lg w-100 text-white ">
                        Configuracion
                    </RouterLink>
                </div>
                <div class=" text-white w-100 ">
                    <RouterLink to="/login" type="button" class="btn btn-lg w-100 text-white">Cerrar Sesion</RouterLink>
                </div>

            </div>

        </div>
        <div class="menu2">
            <div class="tituloSuperior">
                <h2>Mi Vivienda 2</h2>
                <RouterLink to="/home/usuario" type="button" class="text-white ">
                    <h2>Usuario</h2>
                </RouterLink>
            </div>

            <div class="fondo">
                <div class="dentro">
                    <h4 class="mt-0 p-0"><b>Credito Hipotecario</b></h4>

                  <form >
                   <div class="container text-center">
                     <div class="row">
                       <div class="col border border-primary">

                         <h5 class=" mt-0 p-0"> Datos del prestamo</h5>


                         <div class="form-group row p-0 m-0 ">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0 ">Precio de Venta</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0" class="form-control col-sm-1 h-100  p-0 m-0 " id="input" v-model="precioDeVenta" >
                           </div>
                         </div>

                         <div class="form-group row p-0 m-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0 ">Frecuencia de Pagos</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.00000001" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="FrecuenciaDePagos" >
                           </div>
                         </div>


                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0 ">Couta Inicial %</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.00000001" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="coutaInicial" >
                           </div>
                         </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-labelp-0 m-0">Bono MiVivienda</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.00000001" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="BonoVivienda" >
                           </div>
                         </div>






                       </div>


                       <div class="col border border-primary">

                          <h5  class=" mt-0 p-0"><b>Costes/gastos Iniciales</b></h5>
                          <div class="form-group row p-0">
                             <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Costos Notariales</label>
                            <div class="col-sm-5">
                               <input type="number" step="0.00000001" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="CostosNotariales" >
                             </div>
                           </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Costos Registrales</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="CostosRegistrales" >
                           </div>
                         </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Tasacion</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="Tasacion" >
                           </div>
                         </div>


                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Comision de estudio</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="ComisionDeEstudio" >
                           </div>
                         </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Comision de act
                           </label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1 h-100 p-0 m-0" id="input" v-model="ComisionDeActivacion" >
                           </div>
                         </div>





                       </div>

                     </div>
                     <div class="row border border-primary">
                       <div>
                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Comision periodica</label>
                           <div class="col-sm-3">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1  h-100 p-0 m-0" id="input" v-model="ComisionPeriodica" >
                           </div>
                         </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Portes</label>
                           <div class="col-sm-3">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1  h-100 p-0 m-0" id="input" v-model="Portes" >
                           </div>
                         </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Gastos de Administracion</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1  h-100 p-0 m-0" id="input" v-model="GastosAdministrativos" >
                           </div>
                         </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">Gastos de Administracion</label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1  h-100 p-0 m-0" id="input" v-model="ComisionDeActivacion" >
                           </div>
                         </div>

                         <div class="form-group row p-0">
                           <label for="inputPRECIO" class="col-sm-5 col-form-label p-0 m-0">%de seguro riesgo
                           </label>
                           <div class="col-sm-5">
                             <input type="number" step="0.01" min="0"  class="form-control col-sm-1  h-100 p-0 m-0" id="input" v-model="seguroDeRiesgo" >
                           </div>
                         </div>
                       </div>

                     </div>

                   </div>


              </form>

                    <RouterLink to="/home/prestamo/calculo" type="button"
                        class="btn btn-lg text-white bg-info mt-3 w-25  ">Calcular</RouterLink>


                  <button   class="btn btn-outline-primary mb-2"
                  @click="add(lista)"
                  >Agregar
                  </button>
                </div>
            </div>


        </div>
    </div>
</template>



<style  scoped>
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

.ayudaUsuario {}

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