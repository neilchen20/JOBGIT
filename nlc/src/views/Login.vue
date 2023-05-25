<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-8 pt-12 pb-12 pl-6 pr-6">
                <v-card-title class="font-weight-black justify-center">{{ card.cardTitle }}</v-card-title>
                <v-card-subtitle class="font-weight-black text-center mt-0">{{ card.cardSubTitle }}</v-card-subtitle>
                <router-view :account-id="user.accountId" @update:account-id="user.accountId = $event"></router-view>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import { ref } from 'vue';
    export default {
        setup() {
            const card = {
                cardTitle: "登入",
                cardSubTitle: "使用您的 Vue SSO 帳戶",
            };
        
            const user = {
                username: "", 
                accountId: ref(""), 
                password: "", 
            };
        
            return {
                card,
                user,
            };
        },
    }
</script>

<style scoped>

</style>