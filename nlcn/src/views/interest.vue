<template>
  <el-container>
    <el-header class="mt-5 mb-5">
      <span class="text-5xl w-100 font-bold">Interests</span>
    </el-header>
    <el-main class="items-center">
      <el-row class="justify-center">
        <el-col
          v-for="(colData, index) in columnData"
          :key="index"
          :span="colData.span"
          :offset="colData.offset"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-carousel indicator-position="none">
              <el-carousel-item v-for="item in colData.photos" :key="item">
                <img :src="item" alt="Image" class="carousel-image flex items-center" />
              </el-carousel-item>
            </el-carousel>
            <div style="padding: 14px">
              <span>{{ colData.title }} </span>
              <div class="bottom">
                <span>{{ colData.time }}</span>
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

const router = useRouter()

const goToHome = () => {
  router.push('/')
}
const columnData = [
  {
    span: 5,
    offset: 0,
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
  { span: 5, offset: 1, photos: [] }
]
</script>

<style>
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

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}
</style>
