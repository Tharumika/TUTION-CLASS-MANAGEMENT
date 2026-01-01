<template>
  <q-page>
    <section class="q-py-xl bg-light-page">
      <div class="container">
        
        <!-- Header -->
        <div class="row items-center q-col-gutter-xl q-mb-xl">
          <div class="col-12 col-md-6">
            <q-badge color="purple-1" text-color="purple-9" class="q-py-xs q-px-md text-weight-bold shadow-1 q-mb-md rounded-full">
              Our Mission
            </q-badge>
            <h1 class="text-h3 text-weight-bold text-dark q-mb-md">Empowering the Next Generation of <span class="text-primary">Strikes</span></h1>
            <p class="text-h6 text-grey-7 leading-relaxed">
              BrainyBoost was founded with a single goal: to democratize access to high-quality education in Sri Lanka. 
              We believe that every student, regardless of their location, deserves the best tools to succeed.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <q-img src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png" class="rounded-xl shadow-2" />
          </div>
        </div>

        <!-- Vision Stats -->
        <div class="bg-white q-pa-xl rounded-xl shadow-1 q-mb-xl border-gray-100">
           <div class="row text-center q-col-gutter-lg">
              <div class="col-12 col-md-4">
                 <div class="text-h2 text-weight-bolder text-primary">5k+</div>
                 <div class="text-subtitle1 text-grey-6 text-uppercase tracking-wider">Students Helped</div>
              </div>
              <div class="col-12 col-md-4">
                 <div class="text-h2 text-weight-bolder text-secondary">500k+</div>
                 <div class="text-subtitle1 text-grey-6 text-uppercase tracking-wider">Questions Solved</div>
              </div>
              <div class="col-12 col-md-4">
                 <div class="text-h2 text-weight-bolder text-accent">98%</div>
                 <div class="text-subtitle1 text-grey-6 text-uppercase tracking-wider">Satisfaction Rate</div>
              </div>
           </div>
        </div>

        <!-- Contact Section -->
        <div id="contact" class="row justify-center">
          <div class="col-12 col-md-8">
            <div class="text-center q-mb-lg">
              <h2 class="text-h4 text-weight-bold text-dark">Get in Touch</h2>
              <p class="text-grey-7">Have questions? We'd love to hear from you.</p>
            </div>
            
            <q-card class="no-shadow border-radius-xl bg-white border-gray-200 q-pa-lg">
              <q-card-section>
                 <q-form class="q-gutter-md">
                   <div class="row q-col-gutter-md">
                     <div class="col-12 col-md-6">
                       <q-input outlined v-model="contactForm.name" label="Your Name" />
                     </div>
                     <div class="col-12 col-md-6">
                       <q-input outlined v-model="contactForm.email" label="Email Address" />
                     </div>
                   </div>
                   <q-input outlined v-model="contactForm.subject" label="Subject" />
                   <q-input outlined v-model="contactForm.message" label="Message" type="textarea" rows="4" />
                   
                   <div class="text-right">
                     <q-btn 
                       unelevated 
                       label="Send Message" 
                       size="lg" 
                       rounded 
                       class="q-px-xl bg-gradient-primary text-white" 
                     />
                   </div>
                 </q-form>
              </q-card-section>
            </q-card>
            
            <div class="row justify-center q-mt-xl q-gutter-xl text-center">
               <div>
                  <q-icon name="email" color="primary" size="md" class="q-mb-sm" />
                  <div class="text-weight-bold">Email Us</div>
                  <div class="text-grey-6">hello@brainyboost.lk</div>
               </div>
               <div>
                  <q-icon name="phone" color="primary" size="md" class="q-mb-sm" />
                  <div class="text-weight-bold">Call Us</div>
                  <div class="text-grey-6">+94 77 123 4567</div>
               </div>
               <div>
                  <q-icon name="location_on" color="primary" size="md" class="q-mb-sm" />
                  <div class="text-weight-bold">Visit Us</div>
                  <div class="text-grey-6">Colombo 07, Sri Lanka</div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
</script>

<style scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
.bg-light-page { background-color: #F9FAFB; }
.leading-relaxed { line-height: 1.8; }
.rounded-xl { border-radius: 24px; }
.border-gray-100 { border: 1px solid #f3f4f6; }
.border-gray-200 { border: 1px solid #e5e7eb; }
.tracking-wider { letter-spacing: 0.1em; }
.bg-gradient-primary {
  background: linear-gradient(135deg, #1976D2 0%, #26A69A 100%);
}
</style>
