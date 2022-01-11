<template>
    <div>
        <div v-for="item in jobs" v-bind:key="item">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
    data() {
        return {
            jobs: [],
        }
    },
    created() {
        var vm = this;
        fetchJobsList()
            .then(response => {
                vm.jobs = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
}
</script>

<style>

</style>