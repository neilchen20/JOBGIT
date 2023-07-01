<template>
  <div>
    <el-header class="mt-5 mb-5">
      <span class="text-5xl w-100 font-bold">{{ Interests }}</span>
    </el-header>
    <el-main class="flex w-[100%] flex-wrap">
      <el-tag
        v-for="interests in interest"
        :key="interests.label"
        :type="interests.type"
        :style="{ background: interests.background }"
        class="mx-1 mt-2 mb-5"
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
          <el-card :body-style="{ padding: '0px' }" shadow="hover" class="elcard">
            <el-carousel indicator-position="none">
              <el-carousel-item v-for="item in colData1.photos" :key="item">
                <el-image
                  class="image"
                  :fit="fit"
                  :src="item || defaultImg"
                  alt="Image"
                  @error="defaultImg"
                />
              </el-carousel-item>
            </el-carousel>
            <div class="p-3 text-lg">
              <span v-if="!colData1.href" class="text-lg" :class="`${colData1.class}`">
                {{ colData1.title }}
              </span>
              <a
                v-else
                class="text-lg underline"
                :class="`${colData1.class}`"
                :href="`${colData1.href}`"
                :target="`${colData1.target}`"
                >{{ colData1.title }}
              </a>
              <div class="flex justify-end mt-2 w-[100%]">
                <span>{{ colData1.time }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <footerText />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import defaultImg from '../assets/fimage.svg'
import footerText from '@/components/footertext.vue'
import int050701 from '../assets/interest/int050701.webp'
import int050702 from '../assets/interest/int050702.webp'
import int050703 from '../assets/interest/int050703.webp'
import int050704 from '../assets/interest/int050704.webp'
import int050705 from '../assets/interest/int050705.webp'
import int050706 from '../assets/interest/int050706.webp'

import int040401 from '../assets/interest/int040401.webp'
import int040402 from '../assets/interest/int040402.webp'
import int040403 from '../assets/interest/int040403.webp'
import int040404 from '../assets/interest/int040404.webp'
import int040405 from '../assets/interest/int040405.webp'

import int123001 from '../assets/interest/int123001.webp'
import int123002 from '../assets/interest/int123002.webp'
import int123003 from '../assets/interest/int123003.webp'
import int123004 from '../assets/interest/int123004.webp'
import int123005 from '../assets/interest/int123005.webp'

import int101001 from '../assets/interest/int101001.webp'
import int101002 from '../assets/interest/int101002.webp'
import int101003 from '../assets/interest/int101003.webp'
import int101004 from '../assets/interest/int101004.webp'
import int101005 from '../assets/interest/int101005.webp'
import int101006 from '../assets/interest/int101006.webp'
import int101007 from '../assets/interest/int101007.webp'
import int101008 from '../assets/interest/int101008.webp'
import int101009 from '../assets/interest/int101009.webp'
import int101010 from '../assets/interest/int101010.webp'

import int081601 from '../assets/interest/int081601.webp'
import int081602 from '../assets/interest/int081602.webp'
import int081603 from '../assets/interest/int081603.webp'
import int081604 from '../assets/interest/int081604.webp'

import int020901 from '../assets/interest/int020901.webp'
import int020902 from '../assets/interest/int020902.webp'
import int020903 from '../assets/interest/int020903.webp'
import int020904 from '../assets/interest/int020904.webp'
import int020905 from '../assets/interest/int020905.webp'
import int020906 from '../assets/interest/int020906.webp'
import int020907 from '../assets/interest/int020907.webp'

const Interests = ref('Interests')

const interest = ref([
  { type: '', label: '#貓奴', background: 'pink', tag: 'test' },
  { type: '', label: '#兩棲爬蟲', background: 'wheat' },
  { type: '', label: '#地毯', background: 'yellow' },
  { type: '', label: '#騎車', background: 'palegreen' },
  { type: '', label: '#遊戲', background: 'aquamarine' },
  { type: '', label: '#展覽', background: 'aqua' },
  { type: '', label: '#唱歌', background: 'lightcyan' }
])

const fit = ref('contain')

const columnData1 = ref([
  {
    span: 5,
    offset: 0,
    title: 'DIY地毯 - sec挑戰單人進階',
    time: '2023.05.07',
    photos: [int050701, int050702, int050703, int050704, int050705, int050706]
  },
  {
    span: 5,
    offset: 1,
    title: 'DIY地毯初體驗',
    time: '2023.04.04',
    photos: [int040401, int040402, int040403, int040404, int040405]
  },
  {
    span: 5,
    offset: 1,
    title: 'Marc讓我成為貓奴XD',
    time: '2022.12.30',
    photos: [int123001, int123002, int123003, int123004, int123005]
  },
  {
    span: 5,
    offset: 1,
    title: '塩田千春：顫動的靈魂',
    time: '2021.10.10',
    photos: [
      int101001,
      int101002,
      int101003,
      int101004,
      int101005,
      int101006,
      int101007,
      int101008,
      int101009,
      int101010
    ]
  },
  {
    span: 5,
    offset: 1,
    title: 'Gogoro 快閃台北橋',
    time: '2020.08.16',
    photos: [int081601, int081602, int081603, int081604],
    class: 'btnani',
    href: 'https://www.gogoro.com/tw/news/2020-08-16-gogoro-taipei-bridge/',
    target: '_blank'
  },
  {
    span: 5,
    offset: 1,
    title: 'Gogoro 24耐環島',
    time: '2020.02.09',
    photos: [int020901, int020902, int020903, int020904, int020905, int020906, int020907]
  }
])
</script>

<style>
.image {
  width: 400px;
  height: 400px;
  object-fit: contain;
}
.elcard {
  background-color: rgba(255, 255, 255, 0.63);
}
@media (min-width: 1400px) {
  .intMain {
    width: 80%;
  }
  .el-col-md-10 {
    display: block;
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
    max-width: 85%;
    margin: 30px;
  }
}
@media (max-width: 1200px) {
  .intMain {
    width: 80%;
  }
}
@media (min-width: 1025px) {
  .el-tag {
    font-size: large;
  }
}
@media (max-width: 1024px) {
  .el-tag {
    font-size: revert;
  }
}
@media (min-width: 768px) {
  .center {
    display: flex;
    align-items: center;
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

.el-carousel__item h3 {
  display: flex;
  color: #ffffff;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel {
  height: 320px;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgba(255, 255, 255, 0);
}
</style>
