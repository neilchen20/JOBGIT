<template>
    <v-form ref="form">
        <v-card-text>
            <v-text-field
            label="輸入您的帳號"
            type="text"
            class="font-weight-bold"
            outlined
            clearable
            v-model="myAccountId"
            :rules="usernameRules"
            :counter="usernameLength"
            ></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="mr-2">繼續</v-btn>
        </v-card-actions>
    </v-form>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const usernameLength = 12;
    const usernameRules = [
        (v) => !!v || '請輸入帳號',
        (v) => (v && v.length <= usernameLength) || '最多12碼',
    ];

    const myAccountId = ref('');

    const setAccountId = (value) => {
        myAccountId.value = value;
    };

    const accountId = computed(() => myAccountId.value);

</script>

<script>
    export default {
        name: 'KeyinUser',
        props: ['accountId'],
        setup(props) {
            setAccountId(props.accountId);
            return {
                myAccountId,
                usernameLength,
                usernameRules,
            };
        },
        watch: {
            accountId(value) {
                setAccountId(value);
            },
        },
    };
</script>
  