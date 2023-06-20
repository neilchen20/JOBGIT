<template>
  <el-container>
    <el-header class="mt-5 mb-5">
      <span class="text-5xl w-100 font-bold">Projects</span>
    </el-header>

    <el-main class="w-100 flex">
      <el-timeline class="proTimeline">
        <el-timeline-item
          v-for="card in cards"
          :key="card.id"
          center
          :timestamp="card.timestamp"
          placement="top"
          hollow
          :color="card.color"
        >
          <el-card :body-style="fontColor">
            <el-row class="proCard">
              <el-col class="proPhoto" :span="12">
                <el-image
                  :src="card.url"
                  :zoom-rate="1.5"
                  :preview-src-list="card.srcList"
                  :initial-index="0"
                  fit="cover"
                  hide-on-click-modal
                  close-on-press-escape
                />
              </el-col>
              <el-col class="relative" :span="12">
                <span class="text-xl font-bold">{{ card.title }}</span
                ><br />
                <span class="proCardCon">{{ card.content }}</span>
                <div class="proTagdiv">
                  <el-tag
                    v-for="tag in card.tags"
                    :key="tag.label"
                    :type="tag.type"
                    class="mx-1 mt-2"
                    effect="light"
                    round
                  >
                    {{ tag.label }}
                  </el-tag>
                  <div class="w-[100%]">
                    <el-button
                      text
                      class="float-right"
                      @click="card.id === 2 ? goToMCI() : goToHome()"
                      >{{ card.btn }}</el-button
                    >
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-main>

    <el-footer class="m-13">
      <span class="cursor-pointer mr-100 btnani" @click="goToHome">{{ footerText }}</span>
    </el-footer>
    <router-view />
  </el-container>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  //待修改
  theme: {
    type: String,
    required: true
  }
})

const fontColor = computed(() => ({
  Color: props.theme === 'DARK' ? 'black' : 'white'
}))
console.log(props.theme)

const goToMCI = () => {
  window.location.href = 'https://neilchen20.github.io/MCIdemo/index.html'
}

const cards = ref([
  {
    id: 1,
    timestamp: '2023/5/20~',
    color: '#0bbd87',
    url: '/src/assets/project/proNLC1.png',
    srcList: ['/src/assets/project/proNLC1.png', '/src/assets/project/proNLC2.png'],
    title: 'Neil Chen個人網站',
    content:
      '在完成已上架的第二份作品後，我透過自學來提升自己的能力，目前正在練習製作我的個人網站，裡面有我過往的作品、興趣以及未來會有的按讚功能等等。',
    tags: [
      { type: 'success', label: 'Vue.js' },
      { type: '', label: 'Element Plus' },
      { type: '', label: 'Windi CSS' }
    ],
    btn: 'Open'
  },
  {
    id: 2,
    timestamp: '~2023/1/6',
    color: 'gray',
    url: '/src/assets/project/proMCI1.png',
    srcList: [
      '/src/assets/project/proMCI1.png',
      '/src/assets/project/proMCI2.png',
      '/src/assets/project/proMCI3.png',
      '/src/assets/project/proMCI4.png',
      '/src/assets/project/proMCI5.png',
      '/src/assets/project/proMCI6.png'
    ],
    title: '大量傷病患救護管理系統',
    content:
      '該系統的功能主要是讓消防人員藉由大傷系統瞭解案件現場的狀況，整個架構分為案件資訊、救護站資訊以及傷病患資訊等頁面，可以看到各個案件內的分析數據。',
    tags: [
      { type: '', label: 'HTML' },
      { type: 'success', label: 'CSS' },
      { type: 'info', label: 'JavaScript' },
      { type: 'danger', label: 'DataTables' }
    ],
    btn: 'Open'
  },
  {
    id: 3,
    timestamp: '~2022/6/26',
    color: 'gray',
    url: '/src/assets/project/proShen1.png',
    srcList: ['/src/assets/project/proShen1.png'],
    title: '客戶資料紀錄管理系統',
    content:
      '該系統為自行接案的項目，我在理解店家需求後進行開發，店家可以透過此系統進行顧客的資料創建、維護、查找及刪除，可記錄姓名、地址、電話、維修項目與金額。',
    tags: [
      { type: '', label: 'Windows Form' },
      { type: 'success', label: 'C#' },
      { type: 'info', label: 'SSMS' }
    ],
    btn: 'Open'
  }
])

const router = useRouter()
const goToHome = () => {
  router.push('/')
}

const footerText = ref('Neil Chen % cd ↵')
</script>

<style scoped>
.proCardCon {
  display: flex;
  margin-top: 20px;
  margin-bottom: 10%;
  padding-left: 20px;
  padding-right: 8px;
  line-height: 40px;
  letter-spacing: 0.05em;
  text-align: justify;
  font-size: 1.125rem; /* 18px */
}
.el-timeline-item__wrapper {
  height: 100%;
}

@media (min-width: 1024px) {
  .proTimeline[data-v-64ad5096] {
    width: 70%;
  }
  .proCard {
    height: auto;
  }
  .el-image[data-v-64ad5096] {
    height: 100%;
  }

  .el-col-12[data-v-64ad5096] {
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }

  .proTagdiv {
    position: relative;
    bottom: 0;
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .proTimeline[data-v-64ad5096] {
    width: 90%;
  }
  .proCard {
    height: 100%;
    display: grid;
  }

  .el-col-12[data-v-64ad5096] {
    height: 100%;
    max-width: 100%;
  }

  .el-image[data-v-64ad5096] {
    height: 95%;
  }
}

@media (max-width: 465px) {
  .proCard {
    height: 100%;
    display: grid;
  }
}

@media (max-width: 400px) {
  .proCard {
    /* height: 1000px; */
    height: 100%;
    display: grid;
  }
}

.proTimeline {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.el-image-viewer__img {
  max-width: 90%;
  max-height: 90%;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  width: 100%;
  display: block;
}

.el-col-12 {
  height: 246px;
}

.proTimeline-Dark {
  background-color: rgba(0, 0, 0, 0.038);
  color: whitesmoke;
}

.el-timeline-item__content,
.el-card {
  background-color: rgba(255, 255, 255, 0.679);
}

.el-image-viewer__mask {
  background: rgb(209, 192, 192);
}
</style>
