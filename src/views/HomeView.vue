<script setup>

import SearchFieldComponent from '@/SearchFieldComponent.vue'
</script>

<template>
  <div>
    <SearchFieldComponent />
    <select name="" id="" class="mt-10">
      <option selected>Filter by Region</option>
      <option value="">Africa</option>
      <option value="">America</option>
      <option value="">Asia</option>
      <option value="">Europe</option>
      <option value="">Oceania</option>
    </select>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
</template>
