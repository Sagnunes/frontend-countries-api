<template>
  <div class="rounded-lg shadow-lg w-[264px] h-[336px]">
    <picture>
      <img src="https://flagcdn.com/de.svg" alt="" class="rounded-t-lg">
    </picture>
    <div class="p-6">
      <h2 class="font-nunito font-extrabold text-xl leading-[26px]">Germany</h2>
      <ul>
        <li>Population:</li>
        <li>Region:</li>
        <li>Capital:</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CountryCard'
}
</script>
<style>
select {
  @apply mt-10 shadow-lg px-6 py-4 rounded font-nunito text-xs leading-5 text-[#111517]
}

ul {
  @apply font-nunito font-semibold text-sm leading-4 space-y-2 mt-4
}
</style>