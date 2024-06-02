<template>
  <div class="container-xl index_mt">
    <ul class="timeline-with-icons">
      <li class="timeline-item mb-5" v-for="project in projects" :key="project.id">
        <span class="timeline-icon">
          <i class="fas fa-rocket text-primary fa-sm fa-fw"></i>
        </span>
        <div v-for="image in project.attributes.projectImage.data" :key="image.id">
          <el-image
            style="width: 100px; height: 100px"
            :src="image.attributes.url"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="[image.attributes.url]"
            fit="cover"
          />
        </div>
        <h5 class="fw-bold">{{ project.attributes.projectTitle }}</h5>
        <p class="text-muted mb-2 fw-bold">{{ project.attributes.publishTime }}</p>
        <p class="text-muted">
          {{ project.attributes.projectDescription }}
        </p>
      </li>
    </ul>
    <footertext />
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import footerText from '@/components/footertext.vue'
import axios from 'axios'

const projects = ref([])
onMounted(async () => {
  try {
    const response_all = await axios.get(
      'http://localhost:1337/api/projects?populate=projectImage'
    )
    console.log(response_all);
    if ((response_all.status = '200')) {
      projects.value = response_all.data.data
      console.log("200")
    }
  } catch (error) {
    console.error('error', error)
  }
})
</script>

<style scoped>
.timeline-with-icons {
  border-left: 1px solid hsl(0, 0%, 90%);
  position: relative;
  list-style: none;
}

.timeline-with-icons .timeline-item {
  position: relative;
}

.timeline-with-icons .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline-with-icons .timeline-icon {
  position: absolute;
  left: -48px;
  background-color: hsl(217, 88.2%, 90%);
  color: hsl(217, 88.8%, 35.1%);
  border-radius: 50%;
  height: 31px;
  width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>