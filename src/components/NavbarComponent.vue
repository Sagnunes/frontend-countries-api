<template>
  <nav class="flex justify-between items-center h-20 px-4 shadow-lg">
    <h1>Where in the world?</h1>
    <div class="flex flex-row items-center gap-x-2">
      <i class="fa-regular fa-moon"></i>
      <button>Dark Mode</button>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style>
h1{
  @apply font-nunito font-extrabold text-sm text-darkBlue-veryDarkLightText
}
button{
  @apply font-nunito font-semibold text-xs text-darkBlue-veryDarkLightText
}
</style>