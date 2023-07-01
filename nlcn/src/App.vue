<template>
  <el-container :class="{ 'text-white': theme === 'LIGHT' }">
    <Loading v-if="isLoading" />
    <ReadingPsBar />
    <div class="background-image"></div>
    <div
      class="darkmode w-[100%] h-[100%] -z-1 fixed"
      :class="[darkModeClass, { 'bg-black-50': theme === 'LIGHT' }]"
    ></div>
    <el-header>
      <el-row class="w-[100%]">
        <el-col :span="8"
          ><div class="float-left pl-10 text-xl">
            <el-image
              class="w-10 h-10 cursor-pointer"
              @click="goToHome"
              :src="theme === 'LIGHT' ? logoW : logoB"
              alt="Logo"
            /></div
        ></el-col>
        <el-col class="float-right" :span="16">
          <el-row>
            <el-col :xs="6" :sm="6" :md="5" :lg="4" :xl="4">
              <template v-if="width < minWidth">
                <el-icon class="btnani" :size="25" @click="goToProject">
                  <Checked />
                </el-icon>
              </template>
              <template v-else>
                <span class="btnani" @click="goToProject">{{ headerProject }}</span>
              </template>
            </el-col>
            <!-- <el-col :xs="6" :sm="6" :md="5" :lg="4" :xl="4">
              <template v-if="width < minWidth">
                <el-icon class="btnani" :size="27" @click="goToNote">
                  <Reading />
                </el-icon>
              </template>
              <template v-else>
                <span class="btnani" @click="goToNote">{{ headerNote }}</span>
              </template>
            </el-col> -->
            <el-col :xs="6" :sm="6" :md="5" :lg="4" :xl="4">
              <template v-if="width < minWidth">
                <el-icon class="btnani" :size="27" @click="goToInterest">
                  <SwitchFilled />
                </el-icon>
              </template>
              <template v-else>
                <span class="btnani" @click="goToInterest">{{ headerInterest }}</span>
              </template>
            </el-col>

            <!-- <el-col :span="6"
              ><span class="cursor-pointer relative underline">{{ headerLogin }}</span></el-col
            > -->
            <el-col :xs="6" :sm="6" :md="5" :lg="4" :xl="4">
              <template v-if="width < minWidth">
                <el-icon class="btnani" :size="25" @click="toggleTheme">
                  <template v-if="theme === 'LIGHT'">
                    <Sunny />
                  </template>
                  <template v-else>
                    <MoonNight />
                  </template>
                </el-icon>
              </template>
              <template v-else>
                <span class="btnani" @click="toggleTheme">{{
                  theme === 'LIGHT' ? 'LIGHT' : 'DARK'
                }}</span>
              </template>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <router-view />
    <backTop />
  </el-container>
</template>

<script setup>
import Loading from '@/components/loading.vue'
import backTop from '@/components/backTop.vue'
import ReadingPsBar from '@/components/rpbar.vue'
import logoW from './assets/logoW.png'
import logoB from './assets/logoB.png'

import { ref, computed, onBeforeUnmount, onMounted, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'

const width = useWindowSize().width
const minWidth = 768

const router = useRouter()

const isLoading = ref(true)
onBeforeUnmount(() => {
  isLoading.value = false
})

const headerProject = ref('PROJECTS')
const headerNote = ref('NOTES')
const headerInterest = ref('INTERESTS')
// const headerLogin = ref('LOGIN')

const goToHome = () => {
  router.push('/')
}

const goToProject = () => {
  router.push('/project')
}

const goToNote = () => {
  router.push('/note')
}

const goToInterest = () => {
  router.push('/interest')
}

const darkModeClass = computed(() => {
  return theme.value === 'DARK' ? 'opacity-80 bg-light-50' : 'opacity-80 bg-black'
})
const toggleTheme = () => {
  theme.value = theme.value === 'DARK' ? 'LIGHT' : 'DARK'
}

const handleDarkModeChange = (matches) => {
  theme.value = matches ? 'LIGHT' : 'DARK'
}
const theme = ref('')
watchEffect(() => {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const isDarkMode = darkModeQuery.matches
  theme.value = isDarkMode ? 'dark' : 'light'
})

onMounted(() => {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

  // 初始化設定
  handleDarkModeChange(darkModeQuery.matches)

  // 監聽設備模式的變化
  watch(() => darkModeQuery.matches, handleDarkModeChange)
})
</script>

<style>
@import '@/assets/font/font.css';
div {
  font-family: jf_font;
}

.background-image {
  width: 100%;
  min-height: 100%;
  background-image: url('@/assets/bgt.jpg');
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: -2;
  opacity: 0.5;
}

.el-container {
  display: flex;
  flex-direction: column;
  min-height: 92vh;
}

.el-header {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  margin-top: 40px;
}

.el-row {
  align-items: center;
  justify-content: flex-end;
}
</style>
