<template>
  <el-container class="flex content-center flex-wrap center">
    <el-header class="mt-5 mb-5">
      <span class="text-5xl w-100 font-bold">Interests{{ width }}</span>
    </el-header>
    <el-main class="items-center intMain">
      <el-tag
        v-for="interests in interest"
        :key="interests.label"
        :type="interests.type"
        :style="{ background: interests.background }"
        class="mx-1 mt-2 mb-5 text-lg"
        effect="light"
      >
        {{ interests.label }}
      </el-tag>
      <el-row class="justify-center">
        <el-col
          v-for="(colData1, index) in columnData1"
          :key="index"
          :span="24"
          :sm="9"
          :md="10"
          :xl="6"
          :lg="6"
          :offset="colData1.offset"
        >
          <el-card class="h-[50vh]" :body-style="{ padding: '0px' }" shadow="hover">
            <el-carousel indicator-position="none">
              <el-carousel-item v-for="item in colData1.photos" :key="item">
                <img
                  class="carousel-image flex items-center"
                  :src="item || defaultImg"
                  alt="Image"
                  @error="defaultImg"
                />
              </el-carousel-item>
            </el-carousel>
            <div style="padding: 14px">
              <span>{{ colData1.title }} </span>
              <div class="bottom">
                <span>{{ colData1.time }}</span>

                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="justify-center mt-12">
        <el-col
          v-for="(colData2, index) in columnData2"
          :key="index"
          :span="colData2.span"
          :offset="colData2.offset"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-carousel indicator-position="none">
              <el-carousel-item v-for="item in colData2.photos" :key="item">
                <img
                  class="carousel-image flex items-center"
                  :src="item || defaultImg"
                  alt="Image"
                  @error="defaultImg"
                />
              </el-carousel-item>
            </el-carousel>
            <div style="padding: 14px">
              <span>{{ colData2.title }} </span>
              <div class="bottom">
                <span>{{ colData2.time }}</span>
                <el-tag v-for="item in colData2.tags" :key="item" :id="`${colData2.id}`">{{
                  colData2.label
                }}</el-tag>
                <!-- <el-tag
                  v-for="tags in tag"
                  :key="tags.label"
                  :type="tags.type"
                  :id="`${tags.id}`"
                  class="mx-1 mt-2 mb-5 text-lg"
                  effect="light"
                  >{{ tags.label }}</el-tag
                > -->
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="m-13">
      <span class="cursor-pointer mr-100" @click="goToHome">Neil Chen % cd ↵</span>
    </el-footer>
    <router-view />
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import defaultImg from '../assets/default.svg'
import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue'

const width = useWindowSize().width

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

const interest = ref([
  { type: '', label: '#貓奴', background: 'pink', tag: 'test' },
  { type: '', label: '#兩棲爬蟲', background: 'wheat' },
  { type: '', label: '#地毯', background: 'yellow' },
  { type: '', label: '#騎車', background: 'palegreen' },
  { type: '', label: '#展覽', background: 'aqua' },
  { type: '', label: '#唱歌', background: 'lightcyan' }
])

const tag = ref([{ type: '', label: '#貓奴', background: 'pink', id: 'cat', tag: 'test' }])

const scrollToContent = () => {
  const element = document.getElementById('cat')
  if (element) {
    console.log(element)
    element.scrollIntoView()
  }
  console.log('123')
}

const columnData1 = [
  {
    span: 5,
    offset: 0,
    title: 'sec挑戰單人進階',
    time: '2023.05.07',
    photos: [
      '/src/assets/interest/int050701.jpg',
      '/src/assets/interest/int050702.jpg',
      '/src/assets/interest/int050703.jpg',
      '/src/assets/interest/int050704.jpg',
      '/src/assets/interest/int050705.jpg',
      '/src/assets/interest/int050706.jpg'
    ]
  },
  {
    span: 5,
    offset: 1,
    title: 'DIY地毯初體驗',
    time: '2023.04.04',
    photos: [
      '/src/assets/interest/int040401.jpg',
      '/src/assets/interest/int040402.jpg',
      '/src/assets/interest/int040403.jpg',
      '/src/assets/interest/int040404.jpg',
      '/src/assets/interest/int040405.jpg'
    ]
  },
  {
    span: 5,
    offset: 1,
    title: 'null',
    time: '',
    photos: ['']
  },
  {
    span: 5,
    offset: 1,
    title: 'null',
    time: '',
    photos: ['']
  },
  {
    span: 5,
    offset: 1,
    title: 'null',
    time: '',
    photos: ['']
  },
  {
    span: 5,
    offset: 1,
    title: 'null',
    time: '',
    photos: ['']
  }
]
const columnData2 = [
  {
    span: 5,
    offset: 0,
    title: 'null',
    time: '',
    photos: [''],
    tags: ['123'],
    id: 'cat',
    label: '#貓奴'
  },
  {
    span: 5,
    offset: 1,
    title: 'null',
    time: '',
    photos: ['']
  },
  {
    span: 5,
    offset: 1,
    title: '塩田千春：顫動的靈魂',
    time: '2021.10.10',
    photos: [
      '/src/assets/interest/int10101.jpg',
      '/src/assets/interest/int10102.jpg',
      '/src/assets/interest/int10103.jpg',
      '/src/assets/interest/int10104.jpg',
      '/src/assets/interest/int10105.jpg',
      '/src/assets/interest/int10106.jpg',
      '/src/assets/interest/int10107.jpg',
      '/src/assets/interest/int10108.jpg',
      '/src/assets/interest/int10109.jpg',
      '/src/assets/interest/int101010.jpg'
    ]
  }
]
</script>

<style>
@media (min-width: 1400px) {
  .intMain {
    width: 80%;
  }
  .el-col-md-10 {
    display: block;
    max-width: 41.6666666667%;
    flex: 0 0 41.6666666667%;
    margin: 30px;
  }
}
@media (max-width: 1400px) {
  .intMain {
    width: 80%;
  }
  .el-col-md-10 {
    display: block;
    max-width: 41.6666666667%;
    flex: 0 0 41.6666666667%;
    margin: 30px;
  }

}
@media (max-width: 1200px) {
  .intMain {
    width: 80%;
  }
}
@media (max-width: 768px) {
  .center {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 465px) {
}

@media (max-width: 400px) {
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.el-card {
  height: 100%;
}

.el-carousel__item h3 {
  display: flex;
  color: #ffffff;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel {
  height: 40vh;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}
</style>
