<template>
  <div class="h-[100%]">
    <el-container>
      <el-main class="flex">
        <div id="mainText">
          <span class="whitespace-pre-line" v-html="mainText"></span>
        </div>
      </el-main>

      <el-footer class="whitespace-pre-line h-28 leading-relaxed flex-shrink-0" v-html="footerContent">
      </el-footer>
    </el-container>
    <router-view />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const date = ref(new Date().getFullYear())
const mainText = ref('')
const footerContent = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('https://nlcn-cms-heroku-7e5d0eb98244.herokuapp.com/api/home-pages?populate=hometitle')
    const homePageData = response.data.data[0].attributes
    mainText.value = homePageData.HomeTitle
    footerContent.value = `
      <a class="btnani text-base" href="mailto:neil.cwn20@gmail.com">neil.cwn20@gmail.com</a>
      <div class="relative w-[100%]">© ${date.value} Neil Chen</div> 
      <img style="opacity: 0.2" src="https://www.f-counter.net/j/63/1708486094/" alt="計數器">
      <span class="float-right opacity-5 relative">v1.1.0</span>`
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
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
