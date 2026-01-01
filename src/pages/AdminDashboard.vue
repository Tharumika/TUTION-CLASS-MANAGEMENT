<template>
  <q-page class="q-pa-lg bg-grey-1">
    
    <!-- Welcome Section -->
     <div class="row items-center justify-between q-mb-lg">
      <div>
        <h1 class="text-h4 text-weight-bold text-grey-9 q-my-none">Dashboard</h1>
        <div class="text-grey-6 q-mt-xs">Welcome back, here's what's happening today.</div>
      </div>
      <!-- Removed direct Add Student button, moved to Quick Actions or Sidebar -->
    </div>

    <!-- Stats Cards (Reactive) -->
    <div class="row q-col-gutter-md q-mb-xl">
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="no-shadow border-radius-lg bg-white q-pa-sm">
          <q-card-section class="row items-center">
            <div class="column">
              <div class="text-caption text-grey-6 text-uppercase text-weight-bold letter-spacing-1">Total Students</div>
              <div class="text-h4 text-weight-bolder text-primary q-mt-xs">{{ stats.totalStudents }}</div>
              <div class="text-caption text-green-7 q-mt-sm flex items-center">
                <q-icon name="trending_up" class="q-mr-xs" />
                <span>All time</span>
              </div>
            </div>
            <q-space />
            <q-avatar color="blue-1" text-color="primary" icon="people" size="lg" font-size="24px" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="no-shadow border-radius-lg bg-white q-pa-sm">
          <q-card-section class="row items-center">
             <div class="column">
              <div class="text-caption text-grey-6 text-uppercase text-weight-bold letter-spacing-1">Active Classes</div>
              <div class="text-h4 text-weight-bolder text-secondary q-mt-xs">0</div>
              <div class="text-caption text-grey-6 q-mt-sm">Coming Soon</div>
            </div>
            <q-space />
            <q-avatar color="teal-1" text-color="secondary" icon="class" size="lg" font-size="24px" />
          </q-card-section>
        </q-card>
      </div>

       <div class="col-12 col-sm-6 col-md-3">
        <q-card class="no-shadow border-radius-lg bg-white q-pa-sm">
          <q-card-section class="row items-center">
             <div class="column">
              <div class="text-caption text-grey-6 text-uppercase text-weight-bold letter-spacing-1">Revenue</div>
              <div class="text-h4 text-weight-bolder text-orange-9 q-mt-xs">$0.00</div>
              <div class="text-caption text-green-7 q-mt-sm flex items-center">
                 <q-icon name="trending_up" class="q-mr-xs" />
                <span>Actual</span>
              </div>
            </div>
            <q-space />
            <q-avatar color="orange-1" text-color="orange-9" icon="payments" size="lg" font-size="24px" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="no-shadow border-radius-lg bg-white q-pa-sm">
          <q-card-section class="row items-center">
             <div class="column">
              <div class="text-caption text-grey-6 text-uppercase text-weight-bold letter-spacing-1">Pending</div>
              <div class="text-h4 text-weight-bolder text-accent q-mt-xs">{{ stats.pendingStudents }}</div>
               <div class="text-caption text-grey-6 q-mt-sm">Approvals</div>
            </div>
            <q-space />
            <q-avatar color="purple-1" text-color="accent" icon="assignment" size="lg" font-size="24px" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Content Grid -->
    <div class="row q-col-gutter-lg">
      
      <!-- Recent Registrations (Activity Log) -->
      <div class="col-12 col-md-8">
        <q-card class="no-shadow border-radius-lg bg-white full-height">
          <q-card-section class="flex items-center justify-between q-pb-none">
            <div class="text-h6 text-weight-bold">Recent Activity</div>
             <q-btn flat dense no-caps label="Refresh" color="primary" @click="fetchRecentActivity" :loading="loading" />
          </q-card-section>
          
          <q-card-section>
             <q-markup-table flat :separator="'none'" class="no-header-border">
              <thead>
                <tr class="text-left text-grey-6">
                  <th class="text-weight-medium">User Name</th>
                  <th class="text-weight-medium">Role</th>
                  <th class="text-weight-medium">Added By</th>
                  <th class="text-weight-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="recentActivity.length === 0">
                  <td colspan="4" class="text-center text-grey-6 q-pa-lg">
                    No recent activity.
                  </td>
                </tr>
                <tr v-for="activity in recentActivity" :key="activity.id">
                  <td>
                    <div class="flex items-center q-gutter-x-sm">
                       <q-avatar size="32px" :color="activity.role === 'Student' ? 'indigo-1' : 'teal-1'" :text-color="activity.role === 'Student' ? 'indigo' : 'teal'">
                         {{ activity.full_name.charAt(0).toUpperCase() }}
                       </q-avatar>
                       <span class="text-weight-medium">{{ activity.full_name }}</span>
                    </div>
                  </td>
                  <td>
                    <q-badge :color="activity.role === 'Student' ? 'blue' : 'green'" :label="activity.role" />
                  </td>
                  <td class="text-grey-8">{{ activity.created_by || 'System' }}</td>
                  <td class="text-grey-7">{{ new Date(activity.created_at).toLocaleDateString() }}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>

      <!-- Quick Actions -->
      <div class="col-12 col-md-4">
         <q-card class="no-shadow border-radius-lg bg-white q-mb-lg">
           <q-card-section>
             <div class="text-h6 text-weight-bold q-mb-md">Quick Actions</div>
             <div class="row q-col-gutter-sm">
               <div class="col-6">
                 <q-btn unelevated color="blue-1" text-color="primary" class="full-width q-py-md column items-center border-radius-md" disable-caps to="/admin-dashboard/students">
                   <q-icon name="person_add" size="sm" class="q-mb-sm" />
                   <div>Add Student</div>
                 </q-btn>
               </div>
                <div class="col-6">
                 <q-btn unelevated color="teal-1" text-color="teal-9" class="full-width q-py-md column items-center border-radius-md" disable-caps>
                   <q-icon name="schedule" size="sm" class="q-mb-sm" />
                   <div>Schedule</div>
                 </q-btn>
               </div>
                <div class="col-6">
                 <q-btn unelevated color="orange-1" text-color="orange-9" class="full-width q-py-md column items-center border-radius-md" disable-caps>
                   <q-icon name="campaign" size="sm" class="q-mb-sm" />
                   <div>Announce</div>
                 </q-btn>
               </div>
                <div class="col-6">
                 <q-btn unelevated color="purple-1" text-color="purple-9" class="full-width q-py-md column items-center border-radius-md" disable-caps>
                   <q-icon name="settings" size="sm" class="q-mb-sm" />
                   <div>Settings</div>
                 </q-btn>
               </div>
             </div>
           </q-card-section>
         </q-card>


      </div>
    </div>

    <!-- Removed Dialogs from Dashboard -->
    
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const recentActivity = ref([])
const stats = ref({
  totalStudents: 0,
  pendingStudents: 0
})
const loading = ref(false)

async function fetchStats() {
  try {
    const { count: total } = await supabase.from('student').select('*', { count: 'exact', head: true })
    const { count: pending } = await supabase.from('student').select('*', { count: 'exact', head: true }).eq('status', 'Pending')
    
    stats.value = {
      totalStudents: total || 0,
      pendingStudents: pending || 0
    }
  } catch (err) {
    console.error('Error fetching stats:', err)
  }
}

async function fetchRecentActivity() {
  loading.value = true
  recentActivity.value = []
  try {
    // Fetch last 5 students
    const { data: students, error: errS } = await supabase
      .from('student')
      .select('id, full_name, created_at, created_by')
      .order('created_at', { ascending: false })
      .limit(5)
    
    // Fetch last 5 teachers
    const { data: teachers, error: errT } = await supabase
      .from('teachers')
      .select('id, full_name, created_at, created_by')
      .order('created_at', { ascending: false })
      .limit(5)

    if (errS) throw errS
    if (errT) throw errT

    // Combine and mark roles
    const combined = [
      ...(students || []).map(s => ({ ...s, role: 'Student' })),
      ...(teachers || []).map(t => ({ ...t, role: 'Teacher' }))
    ]

    // Sort by date desc and take top 10
    recentActivity.value = combined
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 10)

  } catch (err) {
    $q.notify({ type: 'negative', message: 'Failed to fetch activity' })
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchStats()
  fetchRecentActivity()
})
</script>

<style scoped>
.border-radius-lg { border-radius: 16px; }
.border-radius-md { border-radius: 12px; }
.letter-spacing-1 { letter-spacing: 0.5px; }
.bg-gradient-primary { background: linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%); }
.opacity-80 { opacity: 0.8; }
.no-header-border thead tr th { border-bottom: 1px solid #f0f0f0; }
</style>
