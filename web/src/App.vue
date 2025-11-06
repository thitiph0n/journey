<template>
  <div id="app">
    <header>
      <h1>Journey - Travel Expense Tracker</h1>
    </header>
    <main>
      <JourneyList />
    </main>
  </div>
</template>

<script setup lang="ts">
import JourneyList from '@/components/JourneyList.vue'
</script>

<style>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  color: #2c3e50;
}
</style>
