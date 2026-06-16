import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Initialize Vercel Analytics
inject()
import HomePage from './pages/HomePage.vue'
import SemuaCerita from './pages/SemuaCerita.vue'
import Reyva2105102500741 from './pages/post/Reyva-210510250074-1.vue'
import Reyva2105102500742 from './pages/post/Reyva-210510250074-2.vue'
import Reyva2105102500743 from './pages/post/Reyva-210510250074-3.vue'
import Reyva2105102500744 from './pages/post/Reyva-210510250074-4.vue'
import Reyva2105102500745 from './pages/post/Reyva-210510250074-5.vue'
import Reyva2105102500746 from './pages/post/Reyva-210510250074-6.vue'
import Kayla2105102500801 from './pages/post/Kayla-210510250080-1.vue'
import Kayla2105102500802 from './pages/post/Kayla-210510250080-2.vue'
import Kayla2105102500803 from './pages/post/Kayla-210510250080-3.vue'
import Kayla2105102500804 from './pages/post/Kayla-210510250080-4.vue'
import Kayla2105102500805 from './pages/post/Kayla-210510250080-5.vue'
import Kayla2105102500806 from './pages/post/Kayla-210510250080-6.vue'
import Maira2105102500901 from './pages/post/Maira-210510250090-1.vue'
import Maira2105102500902 from './pages/post/Maira-210510250090-2.vue'
import Maira2105102500903 from './pages/post/Maira-210510250090-3.vue'
import Maira2105102500904 from './pages/post/Maira-210510250090-4.vue'
import Maira2105102500905 from './pages/post/Maira-210510250090-5.vue'
import Maira2105102500906 from './pages/post/Maira-210510250090-6.vue'
import Nadine2105102500731 from './pages/post/Nadine-210510250073-1.vue'
import Nadine2105102500732 from './pages/post/Nadine-210510250073-2.vue'
import Nadine2105102500733 from './pages/post/Nadine-210510250073-3.vue'
import Nadine2105102500734 from './pages/post/Nadine-210510250073-4.vue'
import Nadine2105102500735 from './pages/post/Nadine-210510250073-5.vue'
import Nadine2105102500736 from './pages/post/Nadine-210510250073-6.vue'
import Kayla2105102500721 from './pages/post/Kayla-210510250072-1.vue'
import Kayla2105102500722 from './pages/post/Kayla-210510250072-2.vue'
import Kayla2105102500723 from './pages/post/Kayla-210510250072-3.vue'
import Kayla2105102500724 from './pages/post/Kayla-210510250072-4.vue'
import Kayla2105102500725 from './pages/post/Kayla-210510250072-5.vue'
import Kayla2105102500726 from './pages/post/Kayla-210510250072-6.vue'
import Kesya2105102500691 from './pages/post/Kesya-210510250069-1.vue'
import Kesya2105102500692 from './pages/post/Kesya-210510250069-2.vue'
import Kesya2105102500693 from './pages/post/Kesya-210510250069-3.vue'
import Kesya2105102500694 from './pages/post/Kesya-210510250069-4.vue'
import Kesya2105102500695 from './pages/post/Kesya-210510250069-5.vue'
import Kesya2105102500696 from './pages/post/Kesya-210510250069-6.vue'
import Nayfa2105102500551 from './pages/post/Nayfa-210510250055-1.vue'
import Nayfa2105102500552 from './pages/post/Nayfa-210510250055-2.vue'
import Nayfa2105102500553 from './pages/post/Nayfa-210510250055-3.vue'
import Nayfa2105102500554 from './pages/post/Nayfa-210510250055-4.vue'
import Nayfa2105102500555 from './pages/post/Nayfa-210510250055-5.vue'
import Nayfa2105102500556 from './pages/post/Nayfa-210510250055-6.vue'

const routes = [
  { path: '/semua-cerita', component: SemuaCerita },
  { path: '/', component: HomePage },
  { path: '/post/reyva-210510250074-1', component: Reyva2105102500741 },
  { path: '/post/reyva-210510250074-2', component: Reyva2105102500742 },
  { path: '/post/reyva-210510250074-3', component: Reyva2105102500743 },
  { path: '/post/reyva-210510250074-4', component: Reyva2105102500744 },
  { path: '/post/reyva-210510250074-5', component: Reyva2105102500745 },
  { path: '/post/reyva-210510250074-6', component: Reyva2105102500746 },
  { path: '/post/kayla-210510250080-1', component: Kayla2105102500801 },
  { path: '/post/kayla-210510250080-2', component: Kayla2105102500802 },
  { path: '/post/kayla-210510250080-3', component: Kayla2105102500803 },
  { path: '/post/kayla-210510250080-4', component: Kayla2105102500804 },
  { path: '/post/kayla-210510250080-5', component: Kayla2105102500805 },
  { path: '/post/kayla-210510250080-6', component: Kayla2105102500806 },
  { path: '/post/maira-210510250090-1', component: Maira2105102500901 },
  { path: '/post/maira-210510250090-2', component: Maira2105102500902 },
  { path: '/post/maira-210510250090-3', component: Maira2105102500903 },
  { path: '/post/maira-210510250090-4', component: Maira2105102500904 },
  { path: '/post/maira-210510250090-5', component: Maira2105102500905 },
  { path: '/post/maira-210510250090-6', component: Maira2105102500906 },
  { path: '/post/nadine-210510250073-1', component: Nadine2105102500731 },
  { path: '/post/nadine-210510250073-2', component: Nadine2105102500732 },
  { path: '/post/nadine-210510250073-3', component: Nadine2105102500733 },
  { path: '/post/nadine-210510250073-4', component: Nadine2105102500734 },
  { path: '/post/nadine-210510250073-5', component: Nadine2105102500735 },
  { path: '/post/nadine-210510250073-6', component: Nadine2105102500736 },
  { path: '/post/kayla-210510250072-1', component: Kayla2105102500721 },
  { path: '/post/kayla-210510250072-2', component: Kayla2105102500722 },
  { path: '/post/kayla-210510250072-3', component: Kayla2105102500723 },
  { path: '/post/kayla-210510250072-4', component: Kayla2105102500724 },
  { path: '/post/kayla-210510250072-5', component: Kayla2105102500725 },
  { path: '/post/kayla-210510250072-6', component: Kayla2105102500726 },
  { path: '/post/kesya-210510250069-1', component: Kesya2105102500691 },
  { path: '/post/kesya-210510250069-2', component: Kesya2105102500692 },
  { path: '/post/kesya-210510250069-3', component: Kesya2105102500693 },
  { path: '/post/kesya-210510250069-4', component: Kesya2105102500694 },
  { path: '/post/kesya-210510250069-5', component: Kesya2105102500695 },
  { path: '/post/kesya-210510250069-6', component: Kesya2105102500696 },
  { path: '/post/nayfa-210510250055-1', component: Nayfa2105102500551 },
  { path: '/post/nayfa-210510250055-2', component: Nayfa2105102500552 },
  { path: '/post/nayfa-210510250055-3', component: Nayfa2105102500553 },
  { path: '/post/nayfa-210510250055-4', component: Nayfa2105102500554 },
  { path: '/post/nayfa-210510250055-5', component: Nayfa2105102500555 },
  { path: '/post/nayfa-210510250055-6', component: Nayfa2105102500556 }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return savedPosition || { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
