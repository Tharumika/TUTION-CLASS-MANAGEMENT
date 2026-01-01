<template>
  <q-page>
    <!-- HERO SECTION -->
    <section class="hero-section relative-position flex flex-center text-center q-pt-xl q-pb-xl overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute-top-left bg-blue-1 rounded-full q-ma-xl" style="width: 300px; height: 300px; filter: blur(80px); opacity: 0.5;"></div>
      <div class="absolute-bottom-right bg-indigo-1 rounded-full" style="width: 400px; height: 400px; filter: blur(100px); opacity: 0.5; bottom: -100px; right: -100px;"></div>

      <div class="container relative-position z-10 column items-center q-px-md">
        <!-- Badge -->
        <q-badge color="white" text-color="primary" class="q-py-xs q-px-md text-weight-bold shadow-1 q-mb-lg rounded-full border-primary">
          Sri Lanka's #1 A/L Learning Platform
        </q-badge>

        <!-- Headline -->
        <h1 class="text-h2 text-weight-bolder text-dark q-mb-md leading-tight" style="max-width: 800px;">
          Master Your <span class="text-gradient">A/L Exams</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-h6 text-grey-7 q-mb-xl" style="max-width: 700px; line-height: 1.6;">
          Join hundreds of successful students across Sri Lanka. Comprehensive resources for Science, Commerce, Technology, and Arts streams with AI-powered tutoring.
        </p>

        <!-- CTA Buttons -->
        <div class="row q-gutter-md justify-center">
          <q-btn 
            unelevated 
            size="lg" 
            label="Sign Up Free" 
            class="bg-gradient-primary text-white text-weight-bold q-px-xl"
            style="border-radius: 50px;" 
            to="/login"
          />
          <q-btn 
            flat 
            size="lg" 
            label="See Premium" 
            icon="play_circle"
            class="text-dark text-weight-bold"
            no-caps
          />
        </div>

        <!-- Dashboard Preview Image/Mockup -->
        <div class="q-mt-xl shadow-2xl rounded-xl overflow-hidden border-gray-200 bg-white" style="max-width: 900px; width: 100%;">
          <div class="bg-grey-2 q-pa-sm flex items-center q-gutter-x-sm border-b">
             <div class="bg-red-4 rounded-full" style="width: 10px; height: 10px;"></div>
             <div class="bg-yellow-4 rounded-full" style="width: 10px; height: 10px;"></div>
             <div class="bg-green-4 rounded-full" style="width: 10px; height: 10px;"></div>
          </div>
          <div class="q-pa-xl bg-grey-1 text-grey-4" style="height: 400px;">
            <!-- Placeholder for a dashboard screenshot -->
            <div class="flex flex-center full-height column">
               <q-icon name="analytics" size="100px" color="grey-4" />
               <div class="text-h5 text-grey-5 text-weight-bold q-mt-md">Dashboard Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS SECTION -->
    <section class="bg-white q-py-lg border-y border-gray-100">
      <div class="container">
        <div class="row q-col-gutter-lg justify-center text-center">
          <div class="col-6 col-md-3">
             <div class="text-h4 text-weight-bolder text-primary">1,000+</div>
             <div class="text-grey-7 text-weight-medium">Active Students</div>
          </div>
          <div class="col-6 col-md-3">
             <div class="text-h4 text-weight-bolder text-secondary">95%</div>
             <div class="text-grey-7 text-weight-medium">Pass Rate</div>
          </div>
          <div class="col-6 col-md-3">
             <div class="text-h4 text-weight-bolder text-accent">50+</div>
             <div class="text-grey-7 text-weight-medium">Expert Tutors</div>
          </div>
          <div class="col-6 col-md-3">
             <div class="text-h4 text-weight-bolder text-green-6">24/7</div>
             <div class="text-grey-7 text-weight-medium">AI Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section id="features" class="q-py-xl bg-light-page">
      <div class="container text-center q-mb-xl">
        <div class="text-primary text-weight-bold q-mb-sm tracking-wide text-uppercase">Features</div>
        <h2 class="text-h3 text-weight-bold text-dark q-mb-md">Everything You Need to <span class="text-secondary">Succeed</span></h2>
        <p class="text-grey-7 text-h6" style="max-width: 700px; margin: 0 auto;">
          Comprehensive tools designed to master any subject efficiently.
        </p>
      </div>

      <div class="container">
        <div class="row q-col-gutter-lg">
          <!-- Feature 1 -->
          <div class="col-12 col-md-4">
            <q-card class="no-shadow hover-lift border-radius-lg full-height bg-white">
              <q-card-section class="q-pa-lg">
                <div class="bg-blue-1 text-primary q-pa-md inline-block rounded-lg q-mb-md">
                   <q-icon name="quiz" size="32px" />
                </div>
                <div class="text-h5 text-weight-bold q-mb-sm">Subject Quizzes</div>
                <p class="text-grey-7 leading-relaxed">
                  Practice with thousands of past paper questions for Bio, Maths, Tech, and Arts streams tailored to you.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- Feature 2 -->
          <div class="col-12 col-md-4">
            <q-card class="no-shadow hover-lift border-radius-lg full-height bg-white">
              <q-card-section class="q-pa-lg">
                <div class="bg-purple-1 text-purple-6 q-pa-md inline-block rounded-lg q-mb-md">
                   <q-icon name="dashboard" size="32px" />
                </div>
                <div class="text-h5 text-weight-bold q-mb-sm">Smart Dashboard</div>
                <p class="text-grey-7 leading-relaxed">
                  Track your progress with detailed analytics. Visualize your strengths and identify areas for improvement instantly.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- Feature 3 -->
          <div class="col-12 col-md-4">
            <q-card class="no-shadow hover-lift border-radius-lg full-height bg-white">
              <q-card-section class="q-pa-lg">
                <div class="bg-green-1 text-green-6 q-pa-md inline-block rounded-lg q-mb-md">
                   <q-icon name="school" size="32px" />
                </div>
                <div class="text-h5 text-weight-bold q-mb-sm">AI Tutor</div>
                <p class="text-grey-7 leading-relaxed">
                  Get 24/7 personalized help in Sinhala & English. Stuck on a problem? Get detailed step-by-step explanations.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- PREMIUM SECTION -->
    <section id="premium" class="q-py-xl bg-white">
      <div class="container">
        <div class="row items-center q-col-gutter-xl">
           <div class="col-12 col-md-6">
              <h2 class="text-h3 text-weight-bold text-dark q-mb-md">Flexible <span class="text-primary">Pricing</span></h2>
              <p class="text-h6 text-grey-7 q-mb-lg">
                Start for free and upgrade when you're ready. No hidden fees.
              </p>
              
              <q-list class="text-lg text-grey-8 q-mb-xl">
                <q-item class="q-px-none">
                  <q-item-section avatar><q-icon name="check_circle" color="green" /></q-item-section>
                  <q-item-section>Unlimited Practice Questions</q-item-section>
                </q-item>
                 <q-item class="q-px-none">
                  <q-item-section avatar><q-icon name="check_circle" color="green" /></q-item-section>
                  <q-item-section>AI-Powered Doubt Solving</q-item-section>
                </q-item>
                 <q-item class="q-px-none">
                  <q-item-section avatar><q-icon name="check_circle" color="green" /></q-item-section>
                  <q-item-section>Live Revision Classes</q-item-section>
                </q-item>
              </q-list>
           </div>
           
           <div class="col-12 col-md-6">
              <div class="relative-position">
                <div class="absolute-top-right bg-accent text-dark text-weight-bold q-py-xs q-px-md rounded-full" style="top: -15px; right: 20px; z-index: 10;">
                   Most Popular
                </div>
                <q-card class="shadow-xl border-radius-xl overflow-hidden border-primary" style="border: 2px solid var(--q-primary);">
                   <div class="bg-primary text-white q-pa-lg text-center">
                      <div class="text-h6 text-weight-medium opacity-80">Premium Access</div>
                      <div class="text-h3 text-weight-bold q-mt-sm">LKR 2,500 <span class="text-h6 text-weight-regular opacity-80">/mo</span></div>
                   </div>
                   <q-card-section class="q-pa-xl text-center">
                      <p class="text-grey-6 q-mb-lg">Everything you need to get an 'A' grade.</p>
                      <q-btn 
                        unelevated 
                        label="Get Started Now" 
                        class="full-width bg-dark text-white q-py-md text-weight-bold border-radius-md" 
                        size="lg"
                        to="/login"
                      />
                   </q-card-section>
                </q-card>
              </div>
           </div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
// No script needed for static display, interactions handled by router
</script>

<style lang="scss" scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }

.bg-light-page { background-color: #F9FAFB; }
.text-gradient {
  background: linear-gradient(135deg, #FACC15 0%, #F97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-gradient-primary {
  background: linear-gradient(135deg, $primary 0%, $secondary 100%);
}
.rounded-full { border-radius: 9999px; }
.rounded-lg { border-radius: 12px; }
.border-radius-lg { border-radius: 16px; }
.border-radius-xl { border-radius: 24px; }
.border-primary { border: 1px solid rgba($primary, 0.2); }
.border-gray-100 { border-top: 1px solid #f3f4f6; border-bottom: 1px solid #f3f4f6; }
.border-gray-200 { border: 1px solid #e5e7eb; }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
  }
}
</style>
