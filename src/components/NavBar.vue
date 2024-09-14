<template>
  <div>
    <nav v-if="showNavbar">
      <router-link to="/">Home</router-link>
      <router-link to="/browse">Browse</router-link>
      <router-link to="/my-artworks">My artworks</router-link>
      <button @click="logout">Logout</button>
    </nav>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: { RouterLink },
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    const showNavbar = ref(true)

    const router = useRouter()
    const route = useRoute()
    const currentPathname = computed(() => route.path)

    const logout = () => {
      store.commit('logout')
      router.push({ path: '/login' })
    }

    onMounted(() => {
      store.commit('setUser')

      if (currentPathname.value === '/login') {
        showNavbar.value = false
      }

      if (!user.value) {
        showNavbar.value = false
        router.push({ path: '/login' })
      }
    })

    watch(currentPathname, (path) => {
      if (path === '/login' || !user.value) {
        showNavbar.value = false
      } else {
        showNavbar.value = true
      }
    })

    return { logout, showNavbar }
  }
}
</script>

<style scoped>
nav {
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
