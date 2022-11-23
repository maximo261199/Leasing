import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Historial from '../views/Historial.vue'
import Configuracion from '../views/ConfiguracionView.vue'
import Usuario from '../views/UsuarioView.vue'
import Ayuda from '../views/AyudaView.vue'
import Prestamo from '../views/DatosDelPrestamoView.vue'
import Calculo from '../views/CalculoView.vue'
import CalculoII from '../views/CalculoIIView.vue'
import ResultadoPageI from '../views/ResultadoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
     
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    ,
    {
      path: '/home/historial',
      name: 'historial',
      component: Historial
    },
   
    {
      path: '/home/configuracion',
      name: 'configuracion',
      component: Configuracion
    },
    {
      path: '/home/usuario',
      name: 'usuario',
      component: Usuario
    }
    ,
    {
      path: '/home/ayuda',
      name: 'ayuda',
      component: Ayuda
    },
    {
      path: '/home/prestamo',
      name: 'prestamo',
      component: Prestamo
    },
    {
      path: '/home/prestamo/calculo',
      name: 'calculo',
      component: Calculo
    },
    {
      path: '/home/prestamo/calculo/calculoII',
      name: 'calculoII',
      component: CalculoII
    },   
    {
      path: '/home/prestamo/resultado',
      name: 'resultado',
      component: ResultadoPageI
    }
  
  ]
})



export default router


