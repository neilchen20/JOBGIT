<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100 top-0 px-4 z-10 backdrop-blur-sm"
  >
    <div class="container-fluid">
      <a class="navbar-brand ms-3 ms-lg-5" href="/">
        <img
          :src="isDark ? logoBlack : logoWhite"
          alt="Logo"
          width="60"
          height="60"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between flex-column"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav ps-3">
          <li class="nav-item d-flex justify-content-center">
            <a class="nav-link btn-hover active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item d-flex justify-content-center">
            <a class="nav-link btn-hover" @click="goToProjects">Projects</a>
          </li>
          <li class="nav-item d-flex justify-content-center">
            <a class="nav-link btn-hover" @click="goToVue">Project</a>
          </li>
          <li class="nav-item d-flex justify-content-center">
            <a class="nav-link btn-hover" @click="goToApptest">Notes</a>
          </li>
          <li class="nav-item d-flex justify-content-center d-lg-none">
            <div class="btn-hover" @click="toggleDarkMode()" v-bind="isDark">
              <div
                v-html="
                  isDark
                    ? '<i class=&quot;fa-solid fa-sun&quot;></i>'
                    : '<i class=&quot;fa-regular fa-sun&quot;></i>'
                "
              ></div>
            </div>
          </li>
          <li class="nav-item d-flex justify-content-center d-lg-none">
            <button class="navbar_contact-btn">Contact me</button>
          </li>
        </ul>
      </div>
      <div class="d-none d-lg-flex align-items-center gap-3">
        <div>
          <div class="btn-hover" @click="toggleDarkMode()" v-bind="isDark">
            <div
              v-html="
                isDark
                  ? '<i class=&quot;fa-solid fa-sun&quot;></i>'
                  : '<i class=&quot;fa-regular fa-sun&quot;></i>'
              "
            ></div>
          </div>
        </div>
        <button class="navbar_contact-btn">Contact me</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="js">
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import logoBlack from '../assets/logoB.png'
  import logoWhite from '../assets/logoW.png'
  import { useWindowSize } from '@vueuse/core'
  import { useDark, useToggle, useMediaQuery } from '@vueuse/core'

  const router = useRouter()
  const goToProjects = () => {
    router.push('/projects')
  }
  const goToVue = () => {
    router.push('/project')
  }
  const goToApptest = () => {
    router.push('/apptest')
  }

  const width = useWindowSize().width
  const minWidth = 992

  const isDark = ref(false)
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  if (prefersDarkMode.value !== null) {
    isDark.value = prefersDarkMode.value
  }
  watch(prefersDarkMode, (value) => {
    isDark.value = value
  })
</script>

<style>
.navbar {
  font-size: 20px;
}
.navbar_contact-btn {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 16px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
    rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 38px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
}

.navbar_contact-btn:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.navbar_contact-btn:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
    #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.navbar_contact-btn:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
</style>
