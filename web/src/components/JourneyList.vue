<template>
  <div class="journey-list">
    <h2>Journeys</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <p>Total journeys: {{ journeys.length }}</p>
      <button @click="createSampleJourney">Create Sample Journey</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '@/api/client'

const journeys = ref<any[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const loadJourneys = async () => {
  loading.value = true
  error.value = null

  try {
    const { data, error: apiError } = await api.api.journeys.get()

    if (apiError) {
      error.value = apiError.toString()
      return
    }

    if (data) {
      journeys.value = data.journeys
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error'
  } finally {
    loading.value = false
  }
}

const createSampleJourney = async () => {
  try {
    const { data, error: apiError } = await api.api.journeys.post({
      title: 'Sample Journey',
      description: 'A test journey',
      startDate: new Date().toISOString()
    })

    if (apiError) {
      error.value = apiError.toString()
      return
    }

    console.log('Created journey:', data)
    await loadJourneys()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error'
  }
}

onMounted(() => {
  loadJourneys()
})
</script>

<style scoped>
.journey-list {
  padding: 20px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #35a372;
}
</style>
