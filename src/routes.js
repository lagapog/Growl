import home from '@/pages/home.vue'
import acerca from '@/pages/acerca.vue'
import tutorial from '@/pages/tutorial.vue'

const routes = [
  { path: '/', component: home },
  { path: '/acerca', component: acerca },
  { path: '/tutorial', redirect: '/tutorial/leccion1' },
  { path: '/tutorial/:leccion', component: tutorial }
]

export default routes
