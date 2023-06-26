<template>
  <div class="h-[100%]">
    <el-container>
      <el-main class="flex">
        <div id="mainText">
          <span class="whitespace-pre-line" v-html="main"></span>
        </div>
      </el-main>

      <el-footer class="whitespace-pre-line h-28 leading-relaxed flex-shrink-0" v-html="footer">
      </el-footer>
    </el-container>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const main = ref(
  'Hi，我是Neil Chen，來自臺北市，是德明財經科大資訊管理學系的應屆畢業生。目前在三商電腦股份有限公司擔任實習工程師一職，主要負責前端開發。曾參與開發消防署和消防單位的網頁儀表板，並受到相關人員的肯定。\n<p class="mt-5"/>我的技術主要包括HTML、CSS、JavaScript和DataTables。在開發過程中，我採用了RWD響應式網頁設計方式。目前我正在自學Vue.js、Element Plus、Windi CSS和Mock.js等技術，並透過實作練習兩個專案，其中包括您現在看到的個人網站和網頁儀表板。網頁儀表板是對舊有技術的升級和改進。'
)
const footer = ref(
  '<a class="btnani text-base" href="mailto:neil.cwn20@gmail.com">neil.cwn20@gmail.com</a>\n<div class="relative w-[100%]">© 2023 Neil Chen</div><span class="float-right opacity-10 relative">1.0</span>'
)
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
