<template>
  <aside
    class="flex flex-col bg-[#204ea1] text-white w-1/4 justify-evenly items-center text-lg"
  >
    <div>
      <img src="../components/icons/logo1.png" />
    </div>

    <div class="flex flex-col items-center gap-10">
      <RouterLink to="/" type="button">Inicio</RouterLink>
      <RouterLink to="/home/prestamo" type="button">Mi Vivienda </RouterLink>
      <RouterLink to="/home/historial" type="button">Historial</RouterLink>
    </div>

    <hr class="border w-1/2" />

    <div class="flex flex-col items-center gap-10">
      <RouterLink to="/home/ayuda" type="button">Ayuda</RouterLink>
      <RouterLink to="/home/configuracion" type="button"
        >Configuracion
      </RouterLink>
      <RouterLink to="/login" type="button">Cerrar Sesion</RouterLink>
    </div>
  </aside>
</template>
