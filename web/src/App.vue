<template>
  <Landing />
</template>

<script setup lang="ts">
import Landing from '@/components/Landing.vue'
</script>

<style>
/* Global reset for full width */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

body {
  background: white;
}

#app {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  overflow-x: hidden;
}
</style>
