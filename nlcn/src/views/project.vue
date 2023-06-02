<template>
  <el-container>
    <el-header class="mt-4 mb-5">
      <span class="text-5xl w-100 font-bold">Projects</span>
    </el-header>

    <el-main class="w-100 flex">
      <!-- <el-row>
                <el-col :span="4">
                    <el-card :body-style="{ padding: '0px' }" class="rounded-3xl">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
                        <div style="padding: 14px">
                        <span>大量傷病患救護管理系統</span>
                        <div class="bottom">
                            <span class="leading-snug ">該系統主要是讓消防人員藉由大傷系統瞭解案件現場的狀況</span>
                            <el-button text class="button" @click="goToMCI">Open</el-button>
                        </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col>
                    123
                </el-col>
                <el-col>
                    456
                </el-col>
            </el-row> -->
      <el-timeline class="w-screen-lg">
        <el-timeline-item center timestamp="2023/5/20" placement="top" hollow color="#0bbd87">
          <el-card>
            <el-row>
              <el-col :span="12">
                <el-image :src="proN" class="h-100" />
              </el-col>
              <el-col :span="12" class="">
                <span class="text-xl font-bold">Neil Chen個人網站</span><br />
                <span class="mt-5 flex h-37"></span>
                <div class="flex flex-wrap gap-2">
                  <el-tag
                    v-for="Ndev in Ndev"
                    :key="Ndev.label"
                    :type="Ndev.type"
                    class="mx-1"
                    effect="light"
                    round
                  >
                    {{ Ndev.label }}
                  </el-tag>
                </div>
                <el-button text class="float-right" @click="goToHome">Open</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2023/1/6" placement="top" hollow color="gray">
          <el-card>
            <el-row>
              <el-col :span="12">
                <el-image :src="proMCI" class="h-100" />
              </el-col>
              <el-col :span="12" class="-mr-3">
                <span class="text-xl font-bold">大量傷病患救護管理系統</span><br />
                <span class="mt-5 flex h-37"
                  >該系統的功能主要是讓消防人員藉由大傷系統瞭解案件現場的狀況，可以看到各個救護站以及傷病患等資訊。</span
                >
                <div class="flex flex-wrap gap-2">
                  <el-tag
                    v-for="MCIdev in MCIdev"
                    :key="MCIdev.label"
                    :type="MCIdev.type"
                    class="mx-1"
                    effect="light"
                    round
                  >
                    {{ MCIdev.label }}
                  </el-tag>
                </div>
                <el-button text class="float-right" @click="goToMCI">Open</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>

        <el-timeline-item center timestamp="2022/6/26" placement="top" hollow color="gray">
          <el-card>
            <el-row>
              <el-col :span="12">
                <el-image :src="proShen" class="h-100" />
              </el-col>
              <el-col :span="12" class="-mr-3">
                <span class="text-xl font-bold">客戶資料紀錄管理系統</span><br />
                <span class="mt-5 flex h-42"></span>
                <el-button text class="float-right" @click="goToHome">Open</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-main>

    <el-footer class="m-13">
      <span class="cursor-pointer mr-100" @click="goToHome">Neil Chen % cd ↵</span>
    </el-footer>
    <router-view />
  </el-container>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const proN = ref('/src/assets/N.png')
    const Ndev = ref([
      { type: 'success', label: 'Vue.js' },
      { type: '', label: 'Element Plus' },
      { type: '', label: 'Windi CSS' },
      { type: 'danger', label: '' },
      { type: 'warning', label: '' }
    ])

    const proMCI = ref('/src/assets/MCI.png')
    const goToMCI = () => {
      window.location.href = 'https://neilchen20.github.io/MCIdemo/index.html'
    }
    const MCIdev = ref([
      { type: '', label: 'HTML' },
      { type: 'success', label: 'CSS' },
      { type: 'info', label: 'JavaScript' },
      { type: 'danger', label: 'Datatables' },
      { type: 'warning', label: 'jQuery' }
    ])
    const proShen = ref('/src/assets/shen.png')

    const router = useRouter()
    const goToHome = () => {
      router.push('/')
    }
    return {
      proN,
      Ndev,
      proMCI,
      goToMCI,
      MCIdev,
      proShen,
      goToHome
    }
  }
}
</script>

<style scoped>
/* .time {
  font-size: 12px;
  color: #999;
}
*/
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
</style>
