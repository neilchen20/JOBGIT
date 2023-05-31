<template>
    <el-container>
        <el-header class="mt-4 mb-5">
            <span class="text-5xl ml-85">Interests</span>
        </el-header>
        <el-footer class="m-13">
            <span class="cursor-pointer mr-100" @click="goToHome">Neil Chen % cd ↵</span>
        </el-footer>
        <router-view/>
    </el-container>
</template>

<script>
    export default{
        methods: {
            goToHome() {
                this.$router.push('/');
            }
        },
    }
</script>