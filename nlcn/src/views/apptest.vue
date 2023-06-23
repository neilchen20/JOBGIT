<template>
  <div>
    <template v-if="width < minWidth">
      <el-dropdown trigger="hover" :hide-on-click="false" ref="operationDropdownMenuRef">
        <el-icon class="text-light-50" :size="35"><Menu /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-tree
                class="w-[18%] text-dark-50"
                :data="data"
                :props="defaultProps"
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const width = useWindowSize().width
const minWidth = 768

const data = [
  {
    label: 'Vue.js',
    children: [
      {
        label: '快速起手式！！'
      },
      {
        label: '體驗自動化測試Selenium'
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
]

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>
