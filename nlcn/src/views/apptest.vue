<template>
  <div>
    <div class="container-fluid index_mt">
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col" v-for="item in items" :key="item.id">
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style="
              background-image: url('http://localhost:1337/uploads/k6_633ee7d4e5.jpeg');
              background-size: cover;
            "
          >
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {{ item.attributes.wishList_Title }}
              </h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto" v-if="(item.attributes.wishList_Require = true)">
                  <img
                    src="/src/assets/logoW.png"
                    alt="logo"
                    width="32"
                    height="32"
                    class="rounded-circle border-white"
                  />
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
                  <small>{{ item.attributes.wishList_Description }}</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                  <a :href="item.attributes.wishList_Links" class="btn btn-primary" target="_blank">
                    <small>連結</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerText />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import footerText from '@/components/footertext.vue'

const items = ref([])

import axios from 'axios'

onMounted(async () => {
  try {
    const response_all = await axios.get(
      'http://localhost:1337/api/wish-lists?populate=wishList_Images'
    )
    if ((response_all.status = '200')) {
      items.value = response_all.data.data
      console.log(response_all.data.data)
    }
  } catch (error) {
    console.error('获取数据时出错：', error)
  }
})
const getImageUrl = (url) => {
  return 'http://localhost:1337' + url // 将 API URL 添加到图像 URL
}
const getFnImgUrl = (strapiImageUrl) => {
  const bnImgUrl = 'http://localhost:1337' // Strapi后台的URL
  const fnImgUrl = 'http://localhost:4000' // 前台的URL
  return strapiImageUrl.replace(bnImgUrl, fnImgUrl)
}
</script>

<style>
.card h3,
small {
  text-shadow: black 0.1em 0.1em 0.2em;
}
</style>
