<template>
  <div class="h-[100%]">
    <el-container>
      <el-main class="flex">
        <div id="mainText">
          <span class="whitespace-pre-line">{{ main }}</span>
        </div>
      </el-main>
      <el-footer class="whitespace-pre-line">{{ footer }}</el-footer>
    </el-container>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const main = ref(
  'Hi，我是Neil Chen，來自臺北市，是一名就讀德明財經科大資訊管理學系應屆畢業生，目前在三商電腦股份有限公司擔任實習工程師一職。\n主要負責前端開發，曾為消防署、消防單位開發網頁儀表板，並獲得相關人員青睞，使用技術有HTML、CSS、JavaScript與DateTables，並採用RWD響應式網頁設計，目前正自學Vue.js、Element Plus、Windi CSS與Mock.js等技術，實作練習兩個專案分別是您現看到的個人網站與網頁儀表板，該網頁儀表板是將舊有使用的技術做升級。'
)
const footer = ref('Neil Chen\nneil.cwn20@gmail.com')
</script>

<style>
.el-main {
  height: auto;
  max-width: auto;
  justify-content: center;
}
#mainText {
  height: 80vh;
  width: 60vw;
  text-align: center;
  padding-top: 3%;
  font-size: x-large;
  line-height: 40px;
  text-shadow: 0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%);
  overflow-wrap: break-word;
  letter-spacing: 5px;
  line-height: 3;
  text-align: justify;
}
.st {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  height: 30px;
  width: 100vw;
}
@media (min-width: 1400px) {
}
</style>
