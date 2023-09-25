<!-- eslint-disable vue-scoped-css/enforce-style-type -->
<template>
  <div class="app flex flex-col">
    <header>
      <router-link
        to="/"
        aria-label="Главная"
      >
        <Logo height="30" />
      </router-link>
      <nav>
        <ul>
          <router-link to="/">
            <li>Главная</li>
          </router-link>
        </ul>
      </nav>
    </header>
    <main>
      <!-- eslint-disable-next-line vue/no-undef-components -->
      <router-view />
    </main>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import Logo from '@/assets/icons/logo.svg'

// set valid height in IOS
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

onMounted(() => {
  window.addEventListener('resize', appHeight)
  appHeight()
})

onUnmounted(() => {
  window.removeEventListener('resize', appHeight)
})
</script>
<!-- eslint-disable-next-line vue-scoped-css/enforce-style-type -->
<style lang="css">
h1 {
  font-size: 2rem;
  margin: 1rem 0;
}

body {
  background-color: var(--background-color);
  color: var(--font-color);
}
</style>
<style lang="css" scoped>
.app {
  height: 100vh;
  height: var(--app-height);
}

header {
  display: flex;
  padding: 0.5rem;
  gap: 2rem;
  align-items: center;
}

header svg {
  fill: var(--font-color);
}

header a {
  color: currentColor;
  text-decoration: none;
}

header a:hover {
  text-decoration: underline;
}

main {
  padding: 1rem;
}
</style>
