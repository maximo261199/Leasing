<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
  <div class="p-3 gap-3 bg-[#3d577e] flex h-screen">
    <Navbar />

    <div class="w-3/4 bg-white">
      <div
        class="bg-[#acacac] flex justify-between px-[8%] py-6 uppercase text-white font-bold"
      >
        <p>Bienvenido</p>
        <RouterLink to="/home/usuario" type="button">Usuario</RouterLink>
      </div>

      <div
        class="border-black border-8 flex justify-center items-center h-[90%]"
      >
      <img src="../components/icons/bienvenido.png" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
