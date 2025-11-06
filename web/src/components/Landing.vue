<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <!-- Hero Section -->
        <v-row class="hero-section" align="center" justify="center">
          <v-col cols="12" md="8" lg="6" class="text-center">
            <h1 class="hero-title mb-4">
              <span class="thai-name">เจอนี่</span>
              <span class="english-name">Journey</span>
            </h1>
            <p class="hero-subtitle mb-8">
              Your travel companion for planning trips and tracking expenses
            </p>
            <v-btn
              color="primary"
              size="x-large"
              rounded="pill"
              class="px-8"
              elevation="2"
            >
              Get Started
            </v-btn>
          </v-col>
        </v-row>

        <!-- Features Section -->
        <v-row class="features-section py-12">
          <v-col cols="12" class="text-center mb-8">
            <h2 class="section-title">Features</h2>
          </v-col>
          
          <v-col
            v-for="feature in features"
            :key="feature.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="feature-card h-100" elevation="0">
              <v-card-text class="text-center pa-6">
                <v-icon
                  :icon="feature.icon"
                  size="64"
                  color="primary"
                  class="mb-4"
                ></v-icon>
                <h3 class="feature-title mb-2">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Footer -->
        <v-footer class="footer-section">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <p class="footer-text">
                © 2025 เจอนี่ (Journey) - Your Travel Companion
              </p>
            </v-col>
          </v-row>
        </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Trip Planning',
    description: 'Organize your journeys with ease and keep all details in one place',
    icon: 'mdi-map-marker-path'
  },
  {
    title: 'Expense Tracking',
    description: 'Track your spending with categories and receipts',
    icon: 'mdi-currency-usd'
  },
  {
    title: 'Itinerary',
    description: 'Plan your day-by-day activities and never miss a thing',
    icon: 'mdi-calendar-check'
  },
  {
    title: 'Transport Info',
    description: 'Keep track of flights, trains, and all your bookings',
    icon: 'mdi-airplane'
  },
  {
    title: 'AI Assistant',
    description: 'Get smart suggestions for your trips and expense insights',
    icon: 'mdi-robot'
  },
  {
    title: 'Collaborate',
    description: 'Share trips with friends and family for group planning',
    icon: 'mdi-account-group'
  }
]
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

.hero-title {
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
}

.thai-name {
  display: block;
  font-size: 1.2em;
}

.english-name {
  display: block;
  font-size: 0.8em;
  font-weight: 500;
  margin-top: 0.5rem;
  opacity: 0.95;
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.25rem);
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}

.features-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.section-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 600;
  color: #2c3e50;
}

.feature-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
}

.feature-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.footer-section {
  background-color: #f5f5f5;
  padding: 2rem 1rem;
  margin-top: 4rem;
}

.footer-text {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .hero-section {
    min-height: 80vh;
  }
  
  .features-section {
    padding: 2rem 1rem;
  }
}
</style>
