<template>
  <div class="d-flex flex-column align-items-center" v-html="footer">
  </div>
</template>


<script setup>
  import { ref } from 'vue'
  const date = ref(new Date().getFullYear())
  const footer = ref(
    `<a class="btn-hover text-base" href="mailto:neil.cwn20@gmail.com">neil.cwn20@gmail.com</a>\n<div class="relative w-[100%]">© ${date.value} Neil Chen</div>
    <img id="footer_counter" src="https://www.f-counter.net/j/63/1714613357/" alt="網站計數器">
    <span class="mb-3 opacity-5">v2.0.0</span>`
  )
</script>

<style>
  #footer_counter{
    width: 5%;
    filter: invert(50%);
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
</style>