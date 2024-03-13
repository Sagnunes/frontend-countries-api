<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
import SearchFieldComponent from '@/SearchFieldComponent.vue'
</script>

<template>
  <NavbarComponent />
  <main class="px-4">
    <RouterView />
  </main>
</template>

