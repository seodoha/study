<template>
  <div>
      <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'fetchedAsk'
        ])

        // #3
        // ...mapGetters({
        //     askItems: 'fetchedAsk'
        // })

        // #2
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // })

        // #1
        // ask() {
        //   return this.$store.state.ask;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    },
}
</script>

<style>

</style>