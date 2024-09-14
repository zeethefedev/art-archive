<template>
  <div>
    <div>Log in</div>
    <form>
      <label>
        Username
        <input v-model="user.username" name="username" @input="handleChange" />
      </label>
      <label>
        Password
        <input v-model="user.password" name="password" @input="handleChange" />
      </label>
      <div>{{ message }}</div>
      <button @click="handleLogin">Login</button>
    </form>
  </div>
</template>

<script>
import { PASSWORD, USERNAME } from '@/service/utils'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const user = ref({ username: '', password: '' })
    const message = ref('')
    const router = useRouter()
    const store = useStore()

    const handleChange = (event) => {
      const value = event.target.value
      const name = event.target.name
      const userInfo = { ...user.value, [name]: value }
      user.value = userInfo
    }

    const handleLogin = (event) => {
      event.preventDefault()
      message.value = ''

      const { error, errorMessage } = checkErrorForm()
      if (error) {
        message.value = errorMessage
      } else {
        store.commit('login', user.value)
        message.value = 'login success'
        navigateHome()
      }
    }

    const checkErrorForm = () => {
      const { username, password } = user.value

      let error = false
      let errorMessage = ''

      //missing value
      if (!username || !password) {
        return { error: true, errorMessage: 'please fill in the fields' }
      } else if (username !== USERNAME) {
        return { error: true, errorMessage: 'cannot find user' }
      } else if (password !== PASSWORD) {
        return { error: true, errorMessage: 'wrong password' }
      }
      return { error, errorMessage }
    }

    const navigateHome = () => {
      router.push({ path: '/' })
    }

    return { user, handleChange, handleLogin, message }
  }
}
</script>

<style scoped></style>
