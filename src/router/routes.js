const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'features', component: () => import('pages/FeaturesPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'pricing', component: () => import('pages/PricingPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') }
    ],
  },
  {
    path: '/admin-dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminDashboard.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'teachers', component: () => import('pages/TeachersPage.vue') },
      { path: 'students', component: () => import('pages/StudentsPage.vue') }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
