<template>
  <q-page>
    <section class="q-py-xl bg-light-page">
      <div class="container">
        <!-- Header -->
        <div class="text-center q-mb-xl">
          <q-badge color="blue-1" text-color="primary" class="q-py-xs q-px-md text-weight-bold shadow-1 q-mb-md rounded-full border-primary">
            Why BrainyBoost?
          </q-badge>
          <h1 class="text-h3 text-weight-bold text-dark q-mb-md">Powerful Tools for Subject Mastery</h1>
          <p class="text-h6 text-grey-7" style="max-width: 700px; margin: 0 auto; line-height: 1.6;">
            We provide everything you need to excel in your A/L exams, from interactive quizzes to AI-powered tutoring support.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="row q-col-gutter-xl items-center q-mb-xl">
          <div class="col-12 col-md-6 order-last order-md-first">
             <div class="q-pr-md">
               <h3 class="text-h4 text-weight-bold text-dark q-mb-md">Multi-Stream Coverage</h3>
               <p class="text-body1 text-grey-8 q-mb-md leading-loose">
                 Whether you are in the Science, Commerce, Technology, or Arts stream, BrainyBoost has tailored content for you. 
                 Access past papers, model questions, and revision notes specific to your syllabus.
               </p>
               <ul class="text-body1 text-grey-7 q-pl-md leading-loose">
                 <li>Combined Maths, Biology, Physics, Chemistry</li>
                 <li>Accounting, Econ, Business Studies</li>
                 <li>Engineering & Bio Technology</li>
                 <li>Arts & Languages</li>
               </ul>
             </div>
          </div>
          <div class="col-12 col-md-6">
            <q-img src="https://cdni.iconscout.com/illustration/premium/thumb/online-education-4364232-3620359.png" class="rounded-borders hover-lift" />
          </div>
        </div>

        <div class="row q-col-gutter-xl items-center q-mb-xl">
           <div class="col-12 col-md-6">
             <q-img src="https://cdni.iconscout.com/illustration/premium/thumb/artificial-intelligence-robot-assistant-8488960-6691466.png" class="rounded-borders hover-lift" />
          </div>
          <div class="col-12 col-md-6">
             <div class="q-pl-md">
               <h3 class="text-h4 text-weight-bold text-dark q-mb-md">AI-Powered Personal Tutor</h3>
               <p class="text-body1 text-grey-8 q-mb-md leading-loose">
                 Stuck on a tricky problem at 2 AM? Our AI Tutor is available 24/7. Ask questions in natural language (Sinhala or English) 
                 and get instant, step-by-step explanations without judgment.
               </p>
               <div class="row q-gutter-sm">
                 <q-chip icon="check_circle" color="green-1" text-color="green-8" label="Instant Answers" />
                 <q-chip icon="check_circle" color="green-1" text-color="green-8" label="Step-by-Step Logic" />
                 <q-chip icon="check_circle" color="green-1" text-color="green-8" label="Available 24/7" />
               </div>
             </div>
          </div>
        </div>

        <div class="row q-col-gutter-xl items-center">
           <div class="col-12 col-md-6 order-last order-md-first">
             <div class="q-pr-md">
               <h3 class="text-h4 text-weight-bold text-dark q-mb-md">Smart Analytics & Progress</h3>
               <p class="text-body1 text-grey-8 q-mb-md leading-loose">
                 Stop guessing your weak points. Our dashboard visualizes your performance over time, highlighting areas that need more focus 
                 so you can study smarter, not harder.
               </p>
                <q-btn 
                  unelevated 
                  label="View Dashboard Demo" 
                  class="bg-gradient-primary text-white q-mt-md text-weight-bold q-px-xl" 
                  style="border-radius: 50px;" 
                  size="lg" 
                  to="/login" 
                />
             </div>
          </div>
           <div class="col-12 col-md-6">
            <q-img src="https://cdni.iconscout.com/illustration/premium/thumb/data-analysis-4643034-3844675.png" class="rounded-borders hover-lift" />
          </div>
        </div>

      </div>
    </section>
  </q-page>
</template>

<style scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
.bg-light-page { background-color: #F9FAFB; }
.leading-loose { line-height: 1.8; }
.rounded-borders { border-radius: 20px; }
.rounded-full { border-radius: 9999px; }
.hover-lift { transition: transform 0.3s; }
.hover-lift:hover { transform: translateY(-5px); }
.bg-gradient-primary {
  background: linear-gradient(135deg, #1976D2 0%, #26A69A 100%); /* Adjust colors to match $primary/$secondary if vars not avail in scoped css without import */
}
</style>
