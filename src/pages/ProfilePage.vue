<template>
  <q-page class="q-pa-lg bg-grey-1">
    <div class="row q-col-gutter-lg justify-center">
      <!-- Profile Content -->
      <div class="col-12 col-md-8">
        <h1 class="text-h4 text-weight-bold text-grey-9 q-mt-none q-mb-lg">My Profile</h1>
        
        <q-card class="no-shadow border-radius-lg bg-white q-mb-lg">
          <q-card-section class="q-pa-lg">
            <div class="row items-center q-mb-xl">
              <div class="col-auto q-mr-md">
                 <q-avatar size="80px" class="bg-primary text-white text-h4">
                    {{ (form.fullName && form.fullName.charAt(0).toUpperCase()) || 'A' }}
                    <q-btn
                      round
                      dense
                      color="secondary"
                      icon="edit"
                      size="sm"
                      class="absolute-bottom-right"
                      style="bottom: 0; right: 0;"
                    />
                 </q-avatar>
              </div>
              <div class="col">
                 <div class="text-h5 text-weight-bold">{{ form.fullName || 'Admin User' }}</div>
                 <div class="text-grey-6">{{ userEmail }}</div>
              </div>
            </div>

            <q-form @submit="updateProfile" class="q-gutter-md">
              <div class="row q-col-gutter-md">
                <div class="col-12 col-md-6">
                  <q-input 
                    outlined 
                    v-model="form.fullName" 
                    label="Full Name" 
                    :rules="[val => !!val || 'Required']"
                  />
                </div>
                 <div class="col-12 col-md-6">
                  <q-input 
                    outlined 
                    v-model="userEmail" 
                    label="Email Address" 
                    readonly 
                    disable
                    hint="Contact support to change email"
                  />
                </div>
                 <div class="col-12 col-md-6">
                  <q-input 
                    outlined 
                    v-model="form.phone" 
                    label="Phone Number" 
                    mask="### ### ####"
                  />
                </div>
                 <div class="col-12 col-md-6">
                  <q-input 
                    outlined 
                    v-model="form.role" 
                    label="Role" 
                    readonly
                    bg-color="grey-1"
                  />
                </div>
              </div>

              <div class="q-mt-lg flex justify-end">
                <q-btn 
                  unelevated 
                  label="Save Changes" 
                  type="submit" 
                  color="primary" 
                  class="q-px-lg"
                  :loading="loading"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>

        <!-- Security Section -->
        <q-card class="no-shadow border-radius-lg bg-white">
           <q-card-section class="q-pa-lg">
             <div class="text-h6 text-weight-bold q-mb-md">Security</div>
             <p class="text-grey-7">Manage your password and security preferences.</p>
             
             <q-btn outline color="primary" label="Change Password" icon="lock" />
           </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const loading = ref(false)
const userEmail = ref('')

const form = ref({
  fullName: 'Admin User',
  phone: '',
  role: 'Administrator'
})

// Fetch current user data from Supabase Auth
async function getProfile() {
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    userEmail.value = user.email
    // If you had a 'profiles' table, you would fetch the other details here.
    // For now, we'll keep the placeholders or save to local state/metadata.
  }
}

async function updateProfile() {
  loading.value = true
  // Mock update - would update Supabase 'profiles' table in a real scenario
  setTimeout(() => {
    loading.value = false
    $q.notify({ type: 'positive', message: 'Profile updated successfully' })
  }, 1000)
}

onMounted(() => {
  getProfile()
})
</script>

<style scoped>
.border-radius-lg { border-radius: 16px; }
</style>
