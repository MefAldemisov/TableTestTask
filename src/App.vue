<!-- eslint-disable vue-scoped-css/enforce-style-type -->
<template>
  <div class="app flex flex-col">
    <header>
      <nav>
        <ul>
          <router-link to="/"><li>Main page</li></router-link>
        </ul>
      </nav>
    </header>
    <main class="flex-1 py-5 container mx-auto px-5 md:px-0">
      <!-- eslint-disable-next-line vue/no-undef-components -->
      <router-view />
    </main>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// set valid height in IOS
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

onMounted(async () => {
  window.addEventListener('resize', appHeight)
  appHeight()
})

onUnmounted(() => {
  window.removeEventListener('resize', appHeight)
})
</script>
<!-- eslint-disable-next-line vue-scoped-css/enforce-style-type -->
<style lang="css">
.app {
  height: 100vh;
  height: var(--app-height);
}

body {
  background-color: #f5f5ef;
}
</style>
