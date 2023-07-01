<template>
  <div>
    <el-header class="mt-5 mb-5">
      <span class="text-5xl w-[100%] font-bold">{{ Projects }}</span>
    </el-header>

    <el-main class="w-[100%] flex p-0">
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
          <el-card>
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
              <el-col class="relative max-w-[100%]" :span="12">
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
    <footerText />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import footerText from '@/components/footertext.vue'
import proNLC1 from '../assets/project/proNLC1.png'
import proNLC2 from '../assets/project/proNLC2.png'

import proMCI1 from '../assets/project/proMCI1.png'
import proMCI2 from '../assets/project/proMCI2.png'
import proMCI3 from '../assets/project/proMCI3.png'
import proMCI4 from '../assets/project/proMCI4.png'
import proMCI5 from '../assets/project/proMCI5.png'
import proMCI6 from '../assets/project/proMCI6.png'

import proShen1 from '../assets/project/proShen1.png'
import proShen2 from '../assets/project/proShen2.png'
import proShen3 from '../assets/project/proShen3.png'
import proShen4 from '../assets/project/proShen4.png'
import proShen5 from '../assets/project/proShen5.png'

const Projects = ref('Projects')

const goToMCI = () => {
  window.location.href = 'https://nlcn.me/mcidemo/index.html'
}

const cards = ref([
  {
    id: 1,
    timestamp: '2023/5/20~',
    color: '#0bbd87',
    url: proNLC1,
    srcList: [proNLC1, proNLC2],
    title: 'Neil Chen個人網站',
    content:
      '在完成已上架的第二份作品後，我透過自學來提升自己的能力，目前正在練習製作我的個人網站，裡面有我過往的作品、興趣等。',
    tags: [
      { type: 'success', label: 'Vue.js' },
      { type: '', label: 'Element Plus' },
      { type: '', label: 'Windi CSS' }
    ]
  },
  {
    id: 2,
    timestamp: '~2023/1/6',
    color: 'gray',
    url: proMCI1,
    srcList: [proMCI1, proMCI2, proMCI3, proMCI4, proMCI5, proMCI6],
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
    url: proShen1,
    srcList: [proShen1, proShen2, proShen3, proShen4, proShen5],
    title: '客戶資料紀錄管理系統',
    content:
      '該系統為自行接案的項目，我在理解店家需求後進行開發，店家可以透過此系統進行顧客的資料創建、維護、查找及刪除，可記錄姓名、地址、電話、維修項目與金額。',
    tags: [
      { type: '', label: 'Windows Form' },
      { type: 'success', label: 'C#' },
      { type: 'info', label: 'SSMS' }
    ]
  }
])
</script>

<style scoped>
.proPhoto {
  max-width: 100%;
}
.proCardCon {
  display: flex;
  margin-top: 20px;
  margin-bottom: 10%;
  padding-left: 20px;
  padding-right: 8px;
  line-height: 40px;
  letter-spacing: 0.05em;
  text-align: justify;
  font-size: 1.125rem;
}
.el-timeline-item__wrapper {
  height: 100%;
}

@media (min-width: 1024px) {
  .proTimeline[data-v-64ad5096] {
    width: 70%;
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

  .el-image[data-v-64ad5096] {
    height: 95%;
  }
}

@media (max-width: 465px) {
  .proCard {
    height: 100%;
    display: grid;
  }
  .el-timeline-item__wrapper {
    padding-left: 15px;
  }
}

@media (max-width: 400px) {
  .proCard {
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
