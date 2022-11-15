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
                                <input type="number" class="form-control" id="inputPrecio" placeholder="precio">
                            </div>
                        </div>
                        <div class="form-group row pb-0">
                            <label for="inputAÑOS" class="col-sm-5 col-form-label">N° de años</label>
                            <div class="col-sm-5">
                                <input type="number" class="form-control" id="inputAños" placeholder="N° de años">
                            </div>
                        </div>
                        <div class="form-group row pb-0 ">
                            <label for="inputFRECUENCIA" class="col-sm-5 col-form-label">N° de años</label>
                            <div class="col-sm-5">
                                <div class="dropdown ">
                                    <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                       Mesual
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="form-group row pb-0 ">
                            <label for="inputDIAS" class="col-sm-5 col-form-label">Dias por año</label>
                            <div class="col-sm-5">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle col-sm-5 w-100" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        360
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputTEA" class="col-sm-5 col-form-label">%TEA</label>
                            <div class="col-sm-4">
                                <input type="number" step="0.00000001" min="0" max="10" class="form-control" id="inputTea" placeholder="TEA">
                                
                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputIGV" class="col-sm-5 col-form-label">% de IGV</label>
                            <div class="col-sm-4">
                                <input type="number" step="0.001" min="0" max="10" class="form-control" id="inputIgv" placeholder="IGV">
                                
                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputRENTA" class="col-sm-5 col-form-label">% de impuesto a la renta</label>
                            <div class="col-sm-4">
                                <input type="number" step="0.001" min="0" max="10" class="form-control" id="inputRenta" placeholder="Renta">
                                
                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                        <div class="form-group row pb-0">
                            <label for="inputRECOMPRA" class="col-sm-5 col-form-label">% de recompra</label>
                            <div class="col-sm-4">
                                <input type="number" step="0.001" min="0" max="10" class="form-control" id="inputRecompra" placeholder="Recompra">
                                
                            </div>
                            <label class="col-sm-1">%</label>
                        </div>

                    </form>
                    <button class="text-white bg-info mt-3 w-25 border-none">Siguiente</button>

                </div>
            </div>


        </div>
    </div>
</template>

<script setup>



</script>

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

form{
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