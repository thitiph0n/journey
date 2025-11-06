<template>
  <v-app class="full-width-app">
    <v-main class="full-width-main">
      <!-- Hero Section - Full Screen -->
      <div class="hero-section">
        <div class="hero-background"></div>
        <div class="hero-content">
          <div class="emoji-float">✈️</div>
          <h1 class="hero-title">
            <span class="thai-name">เจอนี่</span>
            <span class="english-name">Journey</span>
          </h1>
          <p class="hero-subtitle">
            ไปเที่ยวไหนมา? เก็บทริปสวยๆ ไว้ที่นี่เลย! 🌏✨
          </p>
          <p class="hero-description">
            วางแผนทริป จด Itinerary เก็บค่าใช้จ่าย ครบจบในที่เดียว
          </p>
          <v-btn
            size="x-large"
            rounded="xl"
            class="cta-button mt-8"
            elevation="8"
          >
            <span class="cta-text">เริ่มใช้งานเลย! 🚀</span>
          </v-btn>
          <div class="scroll-hint">
            <v-icon color="white" size="32" class="bounce">mdi-chevron-down</v-icon>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="features-section">
        <div class="section-header">
          <h2 class="section-title">ทำอะไรได้บ้าง? 🎯</h2>
          <p class="section-subtitle">ฟีเจอร์เด็ดที่จะทำให้การเที่ยวของคุณง่ายขึ้น</p>
        </div>

        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="feature-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-emoji">{{ feature.emoji }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">พร้อมออกเดินทางแล้ว? 🎒</h2>
          <p class="cta-subtitle">เริ่มต้นวางแผนทริปในฝันของคุณวันนี้</p>
          <v-btn
            size="x-large"
            rounded="xl"
            class="cta-button-secondary mt-6"
            elevation="0"
          >
            <span class="cta-text">Let's Go! 🌟</span>
          </v-btn>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const features = [
  {
    emoji: '🗺️',
    title: 'วางแผนทริป',
    description: 'จัดทริปง่ายๆ เก็บรายละเอียดไว้ที่เดียว ไม่พลาด!'
  },
  {
    emoji: '💰',
    title: 'เก็บค่าใช้จ่าย',
    description: 'จดรายรับรายจ่าย แนบใบเสร็จ รู้เลยว่าเงินหายไปไหน'
  },
  {
    emoji: '📅',
    title: 'จัด Itinerary',
    description: 'วางแผนแต่ละวัน ไปไหน กินอะไร ไม่งง ไม่หลง'
  },
  {
    emoji: '✈️',
    title: 'ข้อมูลเดินทาง',
    description: 'เก็บตั๋วเครื่องบิน รถไฟ booking ต่างๆ ไว้ที่นี่'
  },
  {
    emoji: '🤖',
    title: 'AI ช่วยแนะนำ',
    description: 'ให้ AI แนะนำแพลน วิเคราะห์ค่าใช้จ่าย ฉลาดกว่าเดิม'
  },
  {
    emoji: '👥',
    title: 'แชร์กับเพื่อน',
    description: 'วางแพลนกับเพื่อนๆ ครอบครัว ไปด้วยกันสนุกกว่า!'
  }
]
</script>

<style scoped>
/* Force full width - override Vuetify defaults */
:deep(.v-application__wrap) {
  min-height: 100vh !important;
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.v-application) {
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.v-container) {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100% !important;
}

.full-width-app {
  width: 100vw !important;
  max-width: 100vw !important;
  overflow-x: hidden;
  margin: 0 !important;
  padding: 0 !important;
}

.full-width-main {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw !important;
  max-width: 100vw !important;
}

/* Hero Section - Full Screen */
.hero-section {
  position: relative;
  height: 100vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 50%;
  right: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 30%, #ff4e50 70%, #fc6c85 100%);
  animation: gradient-shift 15s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
  animation: fade-in-up 1s ease-out;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.emoji-float {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-title {
  font-family: 'LINE Seed Sans TH', sans-serif;
  margin-bottom: 2rem;
}

.thai-name {
  display: block;
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.5rem;
}

.english-name {
  display: block;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 300;
  letter-spacing: 0.1em;
  opacity: 0.95;
}

.hero-subtitle {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-description {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 400;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-button {
  font-family: 'LINE Seed Sans TH', sans-serif;
  background: white !important;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  padding: 1.5rem 3rem !important;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3) !important;
}

.cta-button .cta-text {
  color: #ff6b35 !important;
  font-size: 1.1rem;
  font-weight: 700;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Features Section */
.features-section {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 50%;
  right: 50%;
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fade-in 1s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.section-title {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: #6B7C8E;
  font-weight: 400;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  animation: slide-up 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes slide-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}

.feature-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(255, 107, 53, 0.3);
  border-color: #ff6b35;
}

.feature-emoji {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.feature-item:hover .feature-emoji {
  transform: scale(1.2) rotate(10deg);
}

.feature-title {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 0.75rem;
}

.feature-description {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: 1rem;
  color: #6B7C8E;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 50%;
  right: 50%;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4e50 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-size: clamp(1rem, 3vw, 1.25rem);
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button-secondary {
  background: white !important;
  font-family: 'LINE Seed Sans TH', sans-serif;
  font-weight: 700;
  text-transform: none;
  padding: 1.5rem 3rem !important;
  transition: all 0.3s ease;
}

.cta-button-secondary .cta-text {
  color: #ff6b35 !important;
  font-weight: 700;
}

.cta-button-secondary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3) !important;
}

/* Responsive */
@media (max-width: 600px) {
  .hero-section {
    height: 100vh;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .features-section,
  .cta-section {
    padding: 3rem 1.5rem;
  }
}
</style>
