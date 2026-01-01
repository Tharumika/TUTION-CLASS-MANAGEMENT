<template>
  <q-page class="flex flex-center bg-light-page">
    <div class="column items-center q-pa-lg" style="width: 100%; max-width: 450px;">
      
      <!-- Brand Logo -->
      <div class="text-h4 text-primary text-weight-bold q-mb-xl flex items-center font-heading cursor-pointer" @click="$router.push('/')">
        <img src="~assets/logo.jpeg" style="height: 48px;" class="q-mr-sm" /> Brainy<span class="text-primary q-ml-xs">Boost</span>
      </div>

      <!-- Login Card -->
      <q-card class="full-width q-pa-md shadow-2 rounded-xl bg-white border border-gray-100 overflow-hidden">
        <q-card-section>
          
          <transition 
            appear 
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut" 
            mode="out-in"
          >
            <div :key="isLogin ? 'login-header' : 'signup-header'">
              <div class="text-h5 text-weight-bold text-center q-mb-sm text-primary">{{ isLogin ? 'Welcome Back' : 'Create Account' }}</div>
              <p class="text-center text-grey-6 q-mb-lg">{{ isLogin ? 'Sign in to manage your classes' : 'Get started with your free account' }}</p>
            </div>
          </transition>

          <q-form @submit="handleSubmit" class="q-gutter-md">
            <q-input
              v-model="email"
              label="Email Address"
              type="email"
              outlined
              dense
              class="q-mb-sm"
              bg-color="white"
              :rules="[val => !!val || 'Email is required']"
            >
              <template v-slot:prepend>
                <q-icon name="email" color="grey-6" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              outlined
              dense
              bg-color="white"
              :rules="[val => !!val || 'Password is required']"
            >
              <template v-slot:prepend>
                <q-icon name="lock" color="grey-6" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  color="grey-6"
                  @click="showPassword = !showPassword"
                />
              </template>
            </q-input>

            <div class="row justify-between items-center q-mb-md">
              <q-checkbox v-model="rememberMe" label="Remember me" size="sm" color="primary" />
              <a href="#" class="text-secondary text-weight-medium text-caption" style="text-decoration: none;">Forgot Password?</a>
            </div>

            <q-btn
              type="submit"
              unelevated
              color="primary"
              text-color="white"
              :label="isLogin ? 'Sign In' : 'Sign Up'"
              class="full-width q-py-sm text-weight-bold shadow-1"
              rounded
              :loading="loading"
            />
          </q-form>
        </q-card-section>
        
        <q-separator color="grey-2" class="q-my-md" />

        <q-card-section class="text-center">
          <p class="text-grey-7 text-caption">
            {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
            <span @click="toggleMode" class="text-secondary text-weight-bold cursor-pointer hover-underline">
              {{ isLogin ? 'Create one' : 'Sign In' }}
            </span>
          </p>
        </q-card-section>
      </q-card>
      
      <p class="text-grey-5 q-mt-xl text-caption">&copy; {{ new Date().getFullYear() }} BrainyBoost.</p>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)
const isLogin = ref(true) // Toggle between Login and Sign Up

const toggleMode = () => {
  isLogin.value = !isLogin.value
  password.value = '' // Clear password for security/UX when switching
}

const handleSubmit = async () => {
  loading.value = true
  
  try {
    if (isLogin.value) {
      // Login Logic
      const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })
      if (error) throw error
      
      $q.notify({
        type: 'positive',
        message: 'Successfully logged in!',
        position: 'top'
      })
      
      router.push('/admin-dashboard')
      
    } else {
      // Sign Up Logic
      const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      })
      if (error) throw error
       
      $q.notify({
        type: 'positive',
        message: 'Account created! Please sign in with your new account.',
        position: 'top',
        timeout: 2000
      })
      
      // Redirect to Sign In view view
      toggleMode()
    }

  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.message || 'Operation failed',
      position: 'top'
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.bg-light-page { background-color: #F5F7FA; }
.border-gray-100 { border: 1px solid #f3f4f6; }
.hover-underline:hover { text-decoration: underline; }
</style>
