<script setup>
import Case_Page from './components/Case_Page.vue'
// import TheWelcome from './components/TheWelcome.vue'

function timenow() {
    var date = new Date;
    var str="";
    str += date.getHours()<12?"上午 ":"下午 ";
    str += ('0' + date.getHours()).slice(-2) + ' : ' + ('0' + date.getMinutes()).slice(-2) + ' : ' + ('0' + date.getSeconds()).slice(-2);
    document.getElementById('timenow').innerHTML=str;
}

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Case_Page msg="You did it!" />
    </div>
  </header> -->
  <header>
    <div id="logodiv" class="left">
      <a onclick="location.reload()"><img src="/src/assets/LOGO.png" title="回首頁" id="rwdlogo"></a>
    </div>                              <!--onclick="gologout()"-->
    <button id="logout" class="custom-btn right">回到選擇系統</button>
    <button id="caselist" class="custom-btn right" onclick="location.reload()">案件列表</button>
    <button id="APP" class="custom-btn right"  onclick="app()">APP下載</button>
    <button id="station_title" class="custom-btn right patient_page" style="display: none;" onclick="back_station_btn()">救護站列表</button>
    <div id="timeid" class="right">
      最後更新：<span id="timenow"></span>
    </div>
    <div id="modal" class="modal">
      <div class="modal-content"></div>
    </div>
  </header>


</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
