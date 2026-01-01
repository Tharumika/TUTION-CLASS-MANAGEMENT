<template>
  <q-page>
    <section class="q-py-xl bg-white">
      <div class="container">
        
        <!-- Header -->
        <div class="text-center q-mb-xl">
           <q-badge color="orange-1" text-color="orange-9" class="q-py-xs q-px-md text-weight-bold shadow-1 q-mb-md rounded-full border-orange">
            Simple, Transparent Pricing
          </q-badge>
          <h1 class="text-h3 text-weight-bold text-dark q-mb-md">Invest in Your <span class="text-primary">Future</span></h1>
          <p class="text-h6 text-grey-7" style="max-width: 600px; margin: 0 auto;">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="row q-col-gutter-lg justify-center q-mb-xl">
          <!-- Free Plan -->
          <div class="col-12 col-md-4">
            <q-card class="no-shadow border-gray-200 border-radius-xl full-height hover-lift column">
              <q-card-section class="q-pa-lg text-center">
                <div class="text-h5 text-weight-bold q-mb-xs">Free Starter</div>
                <div class="text-grey-7 q-mb-lg">For students just getting started</div>
                <div class="text-h3 text-weight-bold text-dark">LKR 0 <span class="text-body1 text-grey-5">/mo</span></div>
              </q-card-section>
              
              <q-separator />

              <q-card-section class="q-pa-lg col">
                <q-list dense>
                  <q-item v-for="n in 3" :key="n" class="q-px-none">
                     <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
                     <q-item-section class="text-grey-8">Access to 100+ Free Questions</q-item-section>
                  </q-item>
                   <q-item class="q-px-none">
                     <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
                     <q-item-section class="text-grey-8">Basic Dashboard</q-item-section>
                  </q-item>
                  <q-item class="q-px-none">
                     <q-item-section avatar><q-icon name="close" color="grey-5" /></q-item-section>
                     <q-item-section class="text-grey-5">No AI Tutor Access</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>

              <q-card-actions class="q-pa-lg">
                <q-btn unelevated outline color="primary" label="Sign Up Free" class="full-width rounded-md q-py-sm text-weight-bold" to="/login" />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Premium Plan -->
          <div class="col-12 col-md-4">
             <div class="relative-position full-height">
                <div class="absolute-top-right bg-accent text-dark text-weight-bold q-py-xs q-px-md rounded-full" style="top: -15px; right: 20px; z-index: 10;">
                   Most Popular
                </div>
                <q-card class="shadow-xl border-primary border-radius-xl full-height column bg-white" style="border-width: 2px;">
                  <q-card-section class="q-pa-lg text-center bg-blue-50">
                    <div class="text-h5 text-weight-bold text-primary q-mb-xs">Pro Scholar</div>
                    <div class="text-grey-8 q-mb-lg">Everything you need to get an 'A'</div>
                    <div class="text-h3 text-weight-bold text-primary">LKR 2,500 <span class="text-body1 text-grey-6">/mo</span></div>
                  </q-card-section>
                  
                  <q-separator color="blue-2" />

                  <q-card-section class="q-pa-lg col">
                    <q-list dense class="text-body1">
                      <q-item class="q-px-none">
                         <q-item-section avatar><q-icon name="check_circle" color="primary" /></q-item-section>
                         <q-item-section class="text-dark text-weight-medium">Unlimited Practice Questions</q-item-section>
                      </q-item>
                       <q-item class="q-px-none">
                         <q-item-section avatar><q-icon name="check_circle" color="primary" /></q-item-section>
                         <q-item-section class="text-dark text-weight-medium">24/7 AI Tutor Access</q-item-section>
                      </q-item>
                       <q-item class="q-px-none">
                         <q-item-section avatar><q-icon name="check_circle" color="primary" /></q-item-section>
                         <q-item-section class="text-dark text-weight-medium">Advanced Analytics</q-item-section>
                      </q-item>
                       <q-item class="q-px-none">
                         <q-item-section avatar><q-icon name="check_circle" color="primary" /></q-item-section>
                         <q-item-section class="text-dark text-weight-medium">Priority Support</q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>

                  <q-card-actions class="q-pa-lg">
                    <q-btn 
                      unelevated 
                      label="Get Premium Now" 
                      class="full-width text-weight-bold shadow-2 bg-gradient-primary text-white" 
                      style="border-radius: 50px;"
                      padding="12px"
                      to="/login" 
                    />
                  </q-card-actions>
                </q-card>
             </div>
          </div>

          <!-- Team/Class Plan -->
           <div class="col-12 col-md-4">
            <q-card class="no-shadow border-gray-200 border-radius-xl full-height hover-lift column">
              <q-card-section class="q-pa-lg text-center">
                <div class="text-h5 text-weight-bold q-mb-xs">Institution</div>
                <div class="text-grey-7 q-mb-lg">For Tuition Classes & Schools</div>
                <div class="text-h3 text-weight-bold text-dark">Custom</div>
              </q-card-section>
              
              <q-separator />

              <q-card-section class="q-pa-lg col">
                <q-list dense>
                  <q-item class="q-px-none">
                     <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
                     <q-item-section class="text-grey-8">Bulk Student Management</q-item-section>
                  </q-item>
                   <q-item class="q-px-none">
                     <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
                     <q-item-section class="text-grey-8">Custom Branding</q-item-section>
                  </q-item>
                  <q-item class="q-px-none">
                     <q-item-section avatar><q-icon name="check" color="green" /></q-item-section>
                     <q-item-section class="text-grey-8">Teacher Dashboard</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>

              <q-card-actions class="q-pa-lg">
                <q-btn unelevated outline color="dark" label="Contact Sales" class="full-width rounded-md q-py-sm text-weight-bold" style="border-radius: 50px;" to="/about" />
              </q-card-actions>
            </q-card>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="row justify-center q-pt-xl">
           <div class="col-12 col-md-8">
              <h2 class="text-h4 text-center text-weight-bold q-mb-xl">Frequently Asked Questions</h2>
              <q-expansion-item
                group="somegroup"
                icon="help"
                label="Can I switch plans later?"
                header-class="text-primary text-h6"
                class="q-mb-md bg-grey-1 rounded-borders"
              >
                <q-card class="bg-grey-1">
                  <q-card-section>
                    Yes! You can upgrade or downgrade your plan at any time from your account settings.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                group="somegroup"
                icon="help"
                label="Is the content accurate for local syllabus?"
                header-class="text-primary text-h6"
                 class="q-mb-md bg-grey-1 rounded-borders"
              >
                <q-card class="bg-grey-1">
                  <q-card-section>
                    Absolutely. All our content is curated by expert Sri Lankan teachers to align perfectly with the National A/L curriculum.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
           </div>
        </div>

      </div>
    </section>
  </q-page>
</template>

<style scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
.border-gray-200 { border: 1px solid #e5e7eb; }
.border-primary { border: 2px solid var(--q-primary); }
.border-orange { border: 1px solid #ffcc80; }
.rounded-full { border-radius: 9999px; }
.border-radius-xl { border-radius: 20px; }
.hover-lift { transition: transform 0.3s; }
.hover-lift:hover { transform: translateY(-8px); }
.bg-blue-50 { background-color: #eff6ff; }
.bg-gradient-primary {
  background: linear-gradient(135deg, #1976D2 0%, #26A69A 100%);
}
</style>
