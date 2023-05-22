<script setup>

import { ref } from 'vue'
import Dropdown from 'primevue/dropdown';

const precio = ref("118000");
const NDeAnos = ref(3);
const tea = ref(12.00000);
const igv = ref(18.00000);
const impuesto = ref(30.00000);
const recompra = ref(1.00000);


/*
 precio = 118000;
 NDeAnos = 3;
 tea = 12.00000;
 igv = 18.00000;
 impuesto = 30.00000;
 recompra = 1.00000;
*/
const selectedDias = ref();
const selectedFrecuencia = ref();
const dias = ref([
    { name: "Año ordinario (360 días)", code: 360 },
    { name: "Año exacto (365 días)", code: 365 }

]);
const frecuencia = ref([
        { name: "Mensual", code: 30},
        { name: "Bimestral", code: 60},
        { name: "Trimestral", code: 90 },
        { name: "Cuatrimestral", code: 120 },
        { name: "Semestral", code: 180 },
        { name: "Anual", code: 360 }

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
                            class="btn btn-lg  rounded-0 fs-1 text-dark bg-white">Leasing
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
                <h2>Leasing</h2>
                <RouterLink to="/home/usuario" type="button" class="text-white ">
                    <h2>Usuario</h2>
                </RouterLink>
            </div>

            <div class="fondo">
                <div class="dentro">
                    <h2 class="mt-1"><b>Datos Del Prestamo</b></h2>
                    <form class="m-0 p-0">
                        <div class="form-group row pb-0">
                            <label for="inputPRECIO" class="col-sm-5 col-form-label">Precio de Venta del Activo</label>
                            <div class="col-sm-5">
                                <h5 class="borde bg bg-white">{{ precio }}</h5>
                            </div>

                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputAÑOS" class="col-sm-5 col-form-label">N° de años</label>
                            <div class="col-sm-5">
                                <h5 class="borde bg bg-white ">{{ NDeAnos }}</h5>
                            </div>
                        </div>








                        <div class="form-group row pb-0 ">
                            <label for="inputFRECUENCIA" class="col-sm-5 col-form-label">Frecuencia de Pagos</label>
                            <div class="col-sm-5">
                                <Dropdown v-model="selectedFrecuencia" :options="frecuencia" optionLabel="name"
                                    optionValue="code" placeholder="Seleccione la fecuencia"
                                    class=" dropdown-toggle btn btn-secondary w-100" />


                            </div>
                        </div>

                        <div class="form-group row pb-0 ">
                            <label for="inputDIAS" class="col-sm-5 col-form-label">Dias por año</label>
                            <div class="col-sm-5">
                                <Dropdown v-model="selectedDias" :options="dias" optionLabel="name" optionValue="code"
                                    placeholder="Seleciona los dias del año" class=" dropdown-toggle btn btn-secondary w-100" />

                            </div>
                        </div>




                        <div class="form-group row pb-0">
                            <label for="inputTEA" class="col-sm-5 col-form-label">%TEA</label>
                            <div class="col-sm-4">
                                <h5 class="borde bg bg-white ">{{ tea }}</h5>

                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputIGV" class="col-sm-5 col-form-label">% de IGV</label>
                            <div class="col-sm-4">
                                <h5 class="borde bg bg-white ">{{ igv }}</h5>

                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputRENTA" class="col-sm-5 col-form-label">% de impuesto a la renta</label>
                            <div class="col-sm-4">
                                
                                <h5 class="borde bg bg-white ">{{impuesto}}</h5>

                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputRECOMPRA" class="col-sm-5 col-form-label">% de recompra</label>
                            <div class="col-sm-4">
                                <h5 class="borde bg bg-white ">{{ recompra }}</h5>
                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                        
                       

                    </form>
                    <RouterLink to="/home/prestamo/calculo" type="button"
                        class="btn btn-lg text-white bg-info mt-3 w-25  ">Siguiente</RouterLink>


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