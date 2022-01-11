<template>
    <div>
        <div v-for="item in asks" v-bind:key="item">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
    data() {
        return {
            asks: [],
        }
    },
    created() {
        var vm = this;
        fetchAskList()
            .then(response => {
                vm.asks = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
}
</script>

<style>

</style>