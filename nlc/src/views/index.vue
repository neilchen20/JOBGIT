<!-- <el-main class="bg-gray-100"><a href="https://neilchen20.github.io/Neilgit/demo/DSMdemo/index.html">大傷</a></el-main>
    <el-footer class="bg-blue-50">Neil Chen</el-footer> -->
<template>
    <div>
        <v-app-bar color="white" elevation="0">
            <div class="el-container">
                <el-header class="bg-light-600">
                    <el-row class="p-4">
                        <el-col :span="12"><el-icon class="float-left"><House /></el-icon></el-col>
                        <el-col :span="12">
                            <el-icon class="float-right"><MoonNight /></el-icon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" @click="goToLogin" class="w-5 h-5"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                        </el-col>
                    </el-row>
                </el-header>
            </div>
        </v-app-bar>
    </div>
</template>

<script setup>
    import { House, MoonNight } from '@element-plus/icons-vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goToLogin = () => {
        router.push({ name: 'Login' });
    };
</script>

<style scoped>
    .el-container {
        width: 100%;
        height: auto;
        flex: 0;
    }

    .el-row {
        width: 100%;
        height: 100%;
    }

    .el-icon,
    .el-icon svg {
        width: 2em;
        height: 2em;
    }
</style>
