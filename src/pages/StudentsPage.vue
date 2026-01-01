<template>
  <q-page class="q-pa-lg bg-grey-1">
    
    <!-- Header -->
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <h1 class="text-h4 text-weight-bold text-grey-9 q-my-none">Students</h1>
        <div class="text-grey-6 q-mt-xs">Manage your students.</div>
      </div>
      <q-btn 
        unelevated 
        color="primary" 
        icon="add" 
        label="New Student" 
        rounded 
        @click="openAddStudent"
      />
    </div>

    <!-- Content Grid -->
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <q-card class="no-shadow border-radius-lg bg-white full-height">
          <q-card-section class="flex items-center justify-between q-pb-none">
            <div class="text-h6 text-weight-bold">Student List</div>
             <q-btn flat dense no-caps label="Refresh" color="primary" @click="fetchStudents" :loading="loading" />
          </q-card-section>
          
          <q-card-section>
             <q-markup-table flat :separator="'none'" class="no-header-border">
              <thead>
                <tr class="text-left text-grey-6">
                  <th class="text-weight-medium">Student Name</th>
                  <th class="text-weight-medium">Course</th>
                  <th class="text-weight-medium">Joined</th>
                  <th class="text-weight-medium">Created By</th>
                  <th class="text-weight-medium">Status</th>
                  <th class="text-weight-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="students.length === 0">
                  <td colspan="6" class="text-center text-grey-6 q-pa-lg">
                    No students found. Add one to get started!
                  </td>
                </tr>
                <tr v-for="student in students" :key="student.id">
                  <td>
                    <div class="flex items-center q-gutter-x-sm">
                       <q-avatar size="32px" color="indigo-1" text-color="indigo">{{ student.full_name.charAt(0).toUpperCase() }}</q-avatar>
                       <span class="text-weight-medium">{{ student.full_name }}</span>
                    </div>
                  </td>
                  <td>{{ student.course || 'N/A' }}</td>
                  <td class="text-grey-7">{{ new Date(student.created_at).toLocaleDateString() }}</td>
                  <td class="text-grey-8">{{ student.created_by || 'System' }}</td>
                  <td>
                    <q-badge 
                      :color="getStatusColor(student.status)" 
                      :text-color="getStatusTextColor(student.status)" 
                      :label="student.status" 
                      class="q-px-sm q-py-xs" 
                    />
                  </td>
                  <td class="text-right">
                    <q-btn flat round dense color="grey-7" icon="edit" size="sm" @click="openEditStudent(student)" />
                    <q-btn flat round dense color="negative" icon="delete" size="sm" @click="deleteStudent(student.id)" />
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Add/Edit Student Dialog -->
    <q-dialog v-model="showAddDialog">
      <q-card style="min-width: 400px; border-radius: 12px;">
        <q-card-section>
          <div class="text-h6 text-weight-bold">{{ isEditing ? 'Edit Student' : 'New Student' }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="saveStudent" class="q-gutter-md">
            <q-input outlined v-model="studentForm.full_name" label="Full Name" :rules="[val => !!val || 'Required']" />
            <q-input outlined v-model="studentForm.email" label="Email Address" type="email" />
            <q-input outlined v-model="studentForm.phone" label="Phone Number" mask="### ### ####" />
            <q-input outlined v-model="studentForm.course" label="Course (e.g. Maths 101)" :rules="[val => !!val || 'Required']" />
             <q-select outlined v-model="studentForm.status" :options="['Active', 'Pending', 'Inactive']" label="Status" />
            
            <div class="row justify-end q-mt-md">
              <q-btn flat label="Cancel" color="grey" v-close-popup />
              <q-btn unelevated :label="isEditing ? 'Update Student' : 'Save Student'" type="submit" color="primary" :loading="submitLoading" />
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
const students = ref([])
const loading = ref(false)
const submitLoading = ref(false)
const showAddDialog = ref(false)
const isEditing = ref(false)

const studentForm = ref({
  id: null,
  full_name: '',
  email: '',
  phone: '',
  course: '',
  status: 'Pending'
})

const getStatusColor = (status) => {
  switch(status) {
    case 'Active': return 'green-1'
    case 'Pending': return 'orange-1'
    case 'Inactive': return 'grey-2'
    default: return 'grey-1'
  }
}

const getStatusTextColor = (status) => {
  switch(status) {
    case 'Active': return 'green-9'
    case 'Pending': return 'orange-9'
    case 'Inactive': return 'grey-7'
    default: return 'grey-8'
  }
}

async function fetchStudents() {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('student')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    students.value = data
  } catch (err) {
    $q.notify({ type: 'negative', message: 'Failed to fetch students' })
    console.error(err)
  } finally {
    loading.value = false
  }
}

function openAddStudent() {
  isEditing.value = false
  studentForm.value = { id: null, full_name: '', email: '', phone: '', course: '', status: 'Pending' }
  showAddDialog.value = true
}

function openEditStudent(student) {
  isEditing.value = true
  studentForm.value = { ...student }
  showAddDialog.value = true
}

async function saveStudent() {
  submitLoading.value = true
  try {
    const { id, ...data } = studentForm.value
    
    // Get current user email for created_by
    const { data: { user } } = await supabase.auth.getUser()
    const userEmail = user ? user.email : 'Unknown'

    let error
    
    if (isEditing.value && id) {
       // Update
       // Don't update created_by on edit usually, but could track updated_by if needed
       const res = await supabase.from('student').update(data).eq('id', id)
       error = res.error
    } else {
       // Insert
       const res = await supabase.from('student').insert([{ ...data, created_by: userEmail }])
       error = res.error
    }
    
    if (error) throw error
    
    $q.notify({ type: 'positive', message: isEditing.value ? 'Student updated!' : 'Student added!' })
    showAddDialog.value = false
    fetchStudents()
    
  } catch (err) {
    console.error(err)
    $q.notify({ type: 'negative', message: err.message || 'Error saving student' })
  } finally {
    submitLoading.value = false
  }
}

async function deleteStudent(id) {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure you want to delete this student?',
    cancel: true,
    persistent: true
  }).onOk(async () => {
    try {
      const { error } = await supabase.from('student').delete().eq('id', id)
      if (error) throw error
      $q.notify({ type: 'positive', message: 'Student deleted' })
      fetchStudents()
    } catch (err) {
      console.error(err)
      $q.notify({ type: 'negative', message: 'Failed to delete student' })
    }
  })
}

onMounted(() => {
  fetchStudents()
})
</script>

<style scoped>
.border-radius-lg { border-radius: 16px; }
.no-header-border thead tr th { border-bottom: 1px solid #f0f0f0; }
</style>
