<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <!-- Navbar -->
    <q-header class="bg-white text-dark q-py-sm" style="border-bottom: 1px solid #f3f4f6;">
      <q-toolbar class="container">
        <!-- Logo -->
        <q-toolbar-title class="flex items-center cursor-pointer" @click="$router.push('/')">
          <img src="~assets/logo.jpeg" style="height: 40px;" class="q-mr-sm" />
          <div class="text-h6 text-weight-bold font-heading">Brainy<span class="text-primary">Boost</span></div>
        </q-toolbar-title>

        <!-- Desktop Links -->
        <div class="gt-sm q-gutter-x-lg flex items-center">
          <router-link to="/" class="nav-link" active-class="text-primary">Home</router-link>
          <router-link to="/features" class="nav-link" active-class="text-primary">Features</router-link>
          <router-link to="/pricing" class="nav-link" active-class="text-primary">Premium</router-link>
          <router-link to="/about" class="nav-link" active-class="text-primary">About</router-link>
          
          <q-btn flat round icon="dark_mode" color="grey-7" size="sm" />
          
          <q-btn 
            unelevated 
            no-caps 
            label="Sign Up Free" 
            class="bg-gradient-primary text-white q-px-lg q-ml-md"
            style="border-radius: 50px; font-weight: 600;" 
            to="/login"
          />
        </div>

        <!-- Mobile Menu -->
        <q-btn flat dense round icon="menu" class="lt-md" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="right" overlay behavior="mobile" bordered class="bg-white text-dark">
      <div class="q-pa-md column q-gutter-md">
        <div class="row justify-between items-center q-mb-md">
          <div class="text-h6 font-heading">Menu</div>
          <q-btn flat round icon="close" v-close-popup />
        </div>
        <q-btn flat align="left" no-caps label="Home" to="/" />
        <q-btn flat align="left" no-caps label="Features" to="/features" />
        <q-btn flat align="left" no-caps label="Premium" to="/pricing" />
        <q-btn flat align="left" no-caps label="About" to="/about" />
        <q-btn flat align="left" no-caps label="Sign Up Free" class="bg-primary text-white" to="/login" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <footer class="bg-dark text-white q-pt-xl q-pb-lg">
      <div class="container q-px-md">
        <div class="row q-col-gutter-xl">
          <!-- Brand -->
          <div class="col-12 col-md-4">
            <div class="flex items-center q-mb-md">
              <img src="~assets/logo.jpeg" style="height: 32px;" class="q-mr-sm" />
              <div class="text-h6 text-weight-bold">BrainyBoost</div>
            </div>
            <p class="text-grey-4 leading-relaxed">
              Empowering Sri Lankan students to excel in all A/L subjects through innovative digital learning and AI support.
            </p>
            <div class="q-gutter-sm q-mt-md">
              <q-btn round flat size="sm" icon="facebook" class="bg-white text-primary" />
              <q-btn round flat size="sm" icon="ion-logo-instagram" class="bg-white text-primary" />
              <q-btn round flat size="sm" icon="ion-logo-linkedin" class="bg-white text-primary" />
            </div>
          </div>

          <!-- Links -->
          <div class="col-6 col-md-2">
            <div class="text-subtitle1 text-weight-bold q-mb-md">Product</div>
            <div class="column q-gutter-sm text-grey-4">
              <a href="#" class="footer-link">Features</a>
              <a href="#" class="footer-link">Pricing</a>
              <a href="#" class="footer-link">Testimonials</a>
            </div>
          </div>

          <div class="col-6 col-md-2">
            <div class="text-subtitle1 text-weight-bold q-mb-md">Company</div>
            <div class="column q-gutter-sm text-grey-4">
              <a href="#" class="footer-link">About</a>
              <a href="#" class="footer-link">Careers</a>
              <a href="#" class="footer-link">Contact</a>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="col-12 col-md-4">
            <div class="text-subtitle1 text-weight-bold q-mb-md">Stay Updated</div>
            <div class="flex no-wrap q-mt-sm">
              <q-input 
                dark 
                outlined 
                dense 
                placeholder="Enter your email" 
                class="full-width"
                bg-color="grey-9"
              />
              <q-btn unelevated color="accent" text-color="dark" label="Send" class="q-ml-sm text-weight-bold" />
            </div>
          </div>
        </div>

        <q-separator dark class="q-my-lg" />

        <div class="row justify-between items-center text-grey-5 text-caption">
          <div>&copy; 2026 BrainyBoost. Made with ❤️ in Sri Lanka.</div>
          <div class="flex q-gutter-md">
            <a href="#" class="footer-link">Privacy</a>
            <a href="#" class="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss" scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
.nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.3s;
  &:hover { color: var(--q-primary); }
}
.footer-link {
  text-decoration: none;
  color: inherit;
  &:hover { color: white; }
}
.bg-gradient-primary {
  background: linear-gradient(135deg, $primary 0%, $secondary 100%);
}
</style>
