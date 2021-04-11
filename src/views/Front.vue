<template>
  <main>
    <h1 class="main-title">Front skills</h1>
    <Table 
      side="front"
      :tableName="front"
    />
  </main>
</template>

<script>
  import Table from '@/components/Table.vue';
  import { mapState } from 'vuex'

  export default {
    components: {
      Table
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState([
        'front'
      ])
    },
  }
</script>

<style lang="scss" scoped>



</style>