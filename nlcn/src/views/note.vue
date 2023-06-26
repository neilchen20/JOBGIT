<template>
  <div>
    <el-header class="mt-5 mb-5">
      <span class="text-5xl w-100 font-bold">{{ Notes }}{{ width }}</span>
    </el-header>
    <div class="none">
      <span class="left-30 mt-50 fixed text-5xl z-20 text-yellow-300">建置中...</span>
    </div>
    <el-main class="w-[100%] h-auto flex">
      <el-row class="noMain">
        <el-col class="min-w-[20%] h-[100%]" :span="5">
          <template v-if="width < minWidth">
            <el-dropdown trigger="hover" :hide-on-click="false" ref="operationDropdownMenuRef">
              <el-icon class="text-light-50" :size="35"><Menu /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <el-tree
                      class="w-[18%] text-dark-50 top-0"
                      :data="data"
                      :props="defaultProps"
                      @node-click="handleNodeClick"
                      highlight-current
                      default-expand-all
                    />
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
          <template v-else>
            <el-tree
              class="w-[18%] bg-transparent fixed top-50"
              :data="data"
              :props="defaultProps"
              highlight-current
              default-expand-all
            />
          </template>
        </el-col>
        <el-col class="changeindex" :span="19">
          <el-icon class="btnani" :size="25" @click="goToVue">
            <Checked />
          </el-icon>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <footerText />
    </el-footer>
  </div>
</template>
<script setup>
import footerText from '../components/footertext.vue'
import index from '../views/index.vue'
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRouter } from 'vue-router'

// 创建路由实例
const router = useRouter()
const goToVue = () => {
  router.push('/notes/vuejs')
}

const width = useWindowSize().width
const minWidth = 1120

const Notes = ref('Notes')

const currentPath = ref('')
const data = ref([
  {
    label: 'Vue.js',
    path: '/index',
    views: index,
    children: [
      {
        label: '快速起手式！！',
        path: '/index',
        component: () => import('../views/index.vue'),
        click: goToVue
      },
      {
        label: '體驗自動化測試Selenium',
        path: '/contact'
      }
    ]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1'
      },
      {
        label: 'Level two 2-2'
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1'
      },
      {
        label: 'Level two 3-2'
      }
    ]
  }
])

const defaultProps = {
  children: 'children',
  label: 'label'
}
const handleNodeClick = (data) => {
  currentPath.value = data.path
  // 执行其他操作...
  console.log(data)
}
</script>
<style>
.none {
  border-bottom: 4px solid #4c4d4f00;
  padding: 0 12px 0 24px;
  background: radial-gradient(transparent 1px, #1414146f 1px);
  background-size: 6px 6px;
  backdrop-filter: saturate(50%) blur(4px);
  height: 70vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
}

@media (min-width: 1400px) {
  .noMain {
    width: 90%;
  }
}
@media (max-width: 1400px) {
  .noMain {
    width: 90%;
  }
}
@media (max-width: 1120px) {
}
@media (max-width: 1200px) {
}
@media (min-width: 768px) {
}
@media (max-width: 768px) {
}

@media (max-width: 465px) {
}

@media (max-width: 400px) {
}
</style>
