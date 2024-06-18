<template>
  <div class="h-[100%]">
    <Loading v-if="isLoading" />
    <div v-else>
      <h1>{{ page.attributes.title }}</h1>
      <div v-for="block in page.attributes.blocks" :key="block.id" class="block">
        <p> {{ block.factoryArea }}</p>
        <p>{{ block.region }}</p>
        <p>{{ block.direction }}</p>
        <div v-if="block.cards && block.cards.length > 0">
          <div v-for="card in block.cards" :key="card.id" class="card">
            <p><strong>{{ card.types }}:</strong> {{ card.content }}</p>
          </div>
        </div>
        <hr>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Loading from '@/components/loading.vue'
const isLoading = ref(true);
const page = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/pages', {
      params: {
        populate: 'blocks.cards'
      }
    });
    page.value = response.data.data[0]; // Assuming you are fetching the first page only
  } catch (error) {
    console.error('Error fetching page data:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style>
::-webkit-scrollbar-track {
  background-color: transparent;
}
.el-main {
  height: auto;
  max-width: auto;
  justify-content: center;
}
#mainText {
  height: auto;
  width: 60vw;
  text-align: center;
  padding-top: 3%;
  font-size: x-large;
  line-height: 40px;
  text-shadow: 0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%);
  -webkit-text-shadow: 0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%);
  overflow-wrap: break-word;
  letter-spacing: 5px;
  line-height: 3;
  text-align: justify;
}
@media (max-width: 1024px) {
  #mainText {
    width: 70vw;
    font-size: large;
    letter-spacing: 2px;
  }
}
@media (max-width: 465px) {
  #mainText {
    width: 75vw;
    font-size: revert;
    letter-spacing: 2px;
  }
}
.st {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  height: 30px;
  width: 100vw;
}
</style>
