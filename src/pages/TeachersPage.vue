<template>
  <q-page class="q-pa-lg bg-grey-1">
    
    <!-- Header -->
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <h1 class="text-h4 text-weight-bold text-grey-9 q-my-none">Teachers</h1>
        <div class="text-grey-6 q-mt-xs">Manage your teaching staff.</div>
      </div>
      <q-btn 
        unelevated 
        color="secondary" 
        icon="add" 
        label="New Teacher" 
        rounded 
        @click="openAddTeacher"
      />
    </div>

    <!-- Content Grid -->
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <q-card class="no-shadow border-radius-lg bg-white full-height">
          <q-card-section class="flex items-center justify-between q-pb-none">
            <div class="text-h6 text-weight-bold">Staff List</div>
             <q-btn flat dense no-caps label="Refresh" color="secondary" @click="fetchTeachers" :loading="loading" />
          </q-card-section>
          
          <q-card-section>
             <q-markup-table flat :separator="'none'" class="no-header-border">
              <thead>
                <tr class="text-left text-grey-6">
                  <th class="text-weight-medium">Teacher Name</th>
                  <th class="text-weight-medium">Subject</th>
                  <th class="text-weight-medium">Email</th>
                  <th class="text-weight-medium">Phone</th>
                  <th class="text-weight-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="teachers.length === 0">
                  <td colspan="5" class="text-center text-grey-6 q-pa-lg">
                    No teachers found. Add one to get started!
                  </td>
                </tr>
                <tr v-for="teacher in teachers" :key="teacher.id">
                  <td>
                    <div class="flex items-center q-gutter-x-sm">
                       <q-avatar size="32px" color="teal-1" text-color="teal">{{ teacher.full_name.charAt(0).toUpperCase() }}</q-avatar>
                       <span class="text-weight-medium">{{ teacher.full_name }}</span>
                    </div>
                  </td>
                  <td>
                    <q-badge color="purple-1" text-color="purple-9" :label="teacher.subject || 'N/A'" class="q-px-sm" />
                  </td>
                  <td class="text-grey-8">{{ teacher.email || 'N/A' }}</td>
                  <td class="text-grey-8">{{ teacher.phone || 'N/A' }}</td>
                  <td class="text-right">
                    <q-btn flat round dense color="grey-7" icon="edit" size="sm" @click="openEditTeacher(teacher)" />
                    <q-btn flat round dense color="negative" icon="delete" size="sm" @click="deleteTeacher(teacher.id)" />
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Add/Edit Teacher Dialog -->
    <q-dialog v-model="showDialog">
      <q-card style="min-width: 400px; border-radius: 12px;">
        <q-card-section>
          <div class="text-h6 text-weight-bold">{{ isEditing ? 'Edit Teacher' : 'New Teacher' }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="saveTeacher" class="q-gutter-md">
            <q-input outlined v-model="form.full_name" label="Full Name" :rules="[val => !!val || 'Required']" />
            <q-input outlined v-model="form.subject" label="Subject (e.g. Physics)" :rules="[val => !!val || 'Required']" />
            <q-input outlined v-model="form.email" label="Email Address" type="email" />
            <q-input outlined v-model="form.phone" label="Phone Number" mask="### ### ####" />
            
            <div class="row justify-end q-mt-md">
              <q-btn flat label="Cancel" color="grey" v-close-popup />
              <q-btn unelevated :label="isEditing ? 'Update Teacher' : 'Save Teacher'" type="submit" color="secondary" :loading="submitLoading" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const teachers = ref([])
const loading = ref(false)
const submitLoading = ref(false)
const showDialog = ref(false)
const isEditing = ref(false)

const form = ref({
  id: null,
  full_name: '',
  email: '',
  phone: '',
  subject: ''
})

async function fetchTeachers() {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    teachers.value = data
  } catch (err) {
    $q.notify({ type: 'negative', message: 'Failed to fetch teachers' })
    console.error(err)
  } finally {
    loading.value = false
  }
}

function openAddTeacher() {
  isEditing.value = false
  form.value = { id: null, full_name: '', email: '', phone: '', subject: '' }
  showDialog.value = true
}

function openEditTeacher(teacher) {
  isEditing.value = true
  form.value = { ...teacher }
  showDialog.value = true
}

async function saveTeacher() {
  submitLoading.value = true
  try {
    const { id, ...data } = form.value
    let error
    
    if (isEditing.value && id) {
       const res = await supabase.from('teachers').update(data).eq('id', id)
       error = res.error
    } else {
       const { data: { user } } = await supabase.auth.getUser()
       const userEmail = user ? user.email : 'Unknown'
       const res = await supabase.from('teachers').insert([{ ...data, created_by: userEmail }])
       error = res.error
    }
    
    if (error) throw error
    
    $q.notify({ type: 'positive', message: isEditing.value ? 'Teacher updated!' : 'Teacher added!' })
    showDialog.value = false
    fetchTeachers()
    
  } catch (err) {
    $q.notify({ type: 'negative', message: err.message || 'Error saving teacher' })
  } finally {
    submitLoading.value = false
  }
}

async function deleteTeacher(id) {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure you want to delete this teacher?',
    cancel: true,
    persistent: true
  }).onOk(async () => {
    try {
      const { error } = await supabase.from('teachers').delete().eq('id', id)
      if (error) throw error
      $q.notify({ type: 'positive', message: 'Teacher deleted' })
      fetchTeachers()
    } catch (err) {
      console.error(err)
      $q.notify({ type: 'negative', message: 'Failed to delete teacher' })
    }
  })
}

onMounted(() => {
  fetchTeachers()
})
</script>

<style scoped>
.border-radius-lg { border-radius: 16px; }
.no-header-border thead tr th { border-bottom: 1px solid #f0f0f0; }
</style>
