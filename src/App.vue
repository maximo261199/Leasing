<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView class="rouer"/> 
</template>

<style scoped>
header{
  background: rgb(61, 87,126);
  border: 1px solid rgb(61, 87,126);
}



.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>


<!--
<router-link class="navbar-brand" to="/">
  <img src="@/assets/logo.svg"
       alt="Logo"
       width="30"
       height="24"
       class="d-inline-block align-text-top">
  Leasing Aleman

</router-link>
<div>
  <router-link class="btn btn-outline-primary" to="/">Home</router-link>
  <router-link class="btn btn-outline-primary" to="/register">Register</router-link>
</div>


-->

