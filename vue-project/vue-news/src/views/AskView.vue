<template>
    <div>
        <p v-for="item in asks" :key="item.title">
            <router-link :to="`item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            asks: 'fetchedAsk'
        })
    },
    created() {
        this.$store.dispatch('FETCH_ASKS');
    },
}
</script>

<style>

</style>