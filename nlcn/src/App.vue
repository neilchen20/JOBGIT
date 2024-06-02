<template>
  <div>
    <navbar />
    <router-view />
    <footers />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import navbar from './components/navbar.vue'
  import footers from './components/footer.vue'
</script>

<style>
@import '@/assets/font/font.css';
div {
  font-family: jf_font;
}
.index_mt{
  margin-top: 5rem;
}

.background-image {
  width: 100%;
  min-height: 100%;
  background-image: url('@/assets/bgt.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: -2;
  opacity: 0.5;
}

.el-container {
  display: flex;
  flex-direction: column;
  min-height: 92vh;
}

.el-header {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  margin-top: 40px;
}

.el-row {
  align-items: center;
  justify-content: flex-end;
}
</style>
