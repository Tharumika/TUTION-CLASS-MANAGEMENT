<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">

    <!-- Dashboard Header -->
    <q-header class="bg-white text-grey-8 shadow-1">
      <q-toolbar class="q-py-sm">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="flex items-center text-primary font-heading text-weight-bold">
          <img src="~assets/logo.jpeg" style="height: 32px;" class="q-mr-sm" /> Brainy<span class="text-primary q-ml-xs">Boost</span> <span class="text-caption text-grey-6 q-ml-sm self-end q-pb-xs">Admin</span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn flat no-caps icon="public" label="View Site" to="/" class="gt-xs text-grey-8" />
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>2</q-badge>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="32px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-menu>
              <q-list style="min-width: 150px">
                <q-item clickable v-close-popup to="/admin-dashboard/profile">
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup @click="handleLogout">
                  <q-item-section>Log out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar Navigation -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="250"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-md q-mb-md">
           <div class="text-caption text-grey-7 q-mb-xs">LOGGED IN AS</div>
           <div class="text-weight-bold">Admin User</div>
        </div>

        <q-list padding class="text-grey-8">
          <q-item clickable v-ripple exact active-class="text-primary bg-blue-1" to="/admin-dashboard">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Dashboard</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-primary bg-blue-1" to="/admin-dashboard/students">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>
            <q-item-section>Students</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-primary bg-blue-1" to="/admin-dashboard/teachers">
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>Teachers</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-primary bg-blue-1">
             <q-item-section avatar>
              <q-icon name="class" />
            </q-item-section>
            <q-item-section>Classes</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-primary bg-blue-1">
             <q-item-section avatar>
              <q-icon name="payments" />
            </q-item-section>
            <q-item-section>Payments</q-item-section>
          </q-item>

           <q-separator class="q-my-md" />

          <q-item clickable v-ripple active-class="text-primary bg-blue-1">
             <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>Settings</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Content Container -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const leftDrawerOpen = ref(false)
const router = useRouter()
const $q = useQuasar()

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

async function handleLogout() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    $q.notify({ type: 'negative', message: 'Error logging out' })
  } else {
    router.replace('/login')
  }
}
</script>

<style scoped>
.font-heading { font-family: 'Inter', sans-serif; }
</style>
