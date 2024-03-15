<template>
  <select name="" id="">
    <option selected>Filter by Region</option>
    <option value="">Africa</option>
    <option value="">America</option>
    <option value="">Asia</option>
    <option value="">Europe</option>
    <option value="">Oceania</option>
  </select>
</template>
<script>
export default {
  name: 'FilterComponent'
}
</script>
<style>
select {
  @apply mt-10 shadow-lg px-6 py-4 rounded font-nunito text-xs leading-5 text-[#111517]
}
</style>