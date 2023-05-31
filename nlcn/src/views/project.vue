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
                <el-timeline-item center timestamp="2023/5/20" placement="top" hollow color='#0bbd87'>
                    <el-card>
                        <el-row>
                            <el-col :span="12">
                                <el-image :src="urls" class="h-100"/>
                            </el-col>
                            <el-col :span="12" class="-mr-3">
                                <span class="text-xl font-bold">Neil Chen個人網站</span><br/>
                                <span class="mt-5 flex h-42"></span>
                                <el-button text class="float-right" @click="goToHome">Open</el-button>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item center timestamp="2023/1/6" placement="top" hollow color='gray'>
                    <el-card>
                        <el-row>
                            <el-col :span="12">
                                <el-image :src="urls" class="h-100"/>
                            </el-col>
                            <el-col :span="12" class="-mr-3">
                                <span class="text-xl font-bold">大量傷病患救護管理系統</span><br/>
                                <span class="mt-5 flex h-42">該系統的功能主要是讓消防人員藉由大傷系統瞭解案件現場的狀況，可以看到各個救護站以及傷病患等資訊。</span>
                                <el-button text class="float-right" @click="goToMCI">Open</el-button>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item center timestamp="2023/5/20" placement="top" hollow color='gray'>
                    <el-card>
                        <el-row>
                            <el-col :span="12">
                                <el-image class="h-100"/>
                            </el-col>
                            <el-col :span="12" class="-mr-3">
                                <span class="text-xl font-bold"></span><br/>
                                <span class="mt-5 flex h-42"></span>
                                <el-button text class="float-right" @click="goToHome">Open</el-button>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item center timestamp="2023/5/20" placement="top" hollow color='gray'>
                    <el-card>
                        <el-row>
                            <el-col :span="12">
                                <el-image class="h-100"/>
                            </el-col>
                            <el-col :span="12" class="-mr-3">
                                <span class="text-xl font-bold"></span><br/>
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
        <router-view/>
    </el-container>
</template>

<script>
    
    export default {
        data() {
            return {
                urls:'/src/assets/321.png',
            };
        },
        methods: {
            goToHome() {
                this.$router.push('/');
            },
            goToMCI() {
                window.location.href = 'https://neilchen20.github.io/MCIdemo/index.html';
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

.button {
  
}

.image {
  width: 100%;
  display: block;
} 

.el-col-12 {
    margin-right: -10px;
    height: 246px;
}

</style>