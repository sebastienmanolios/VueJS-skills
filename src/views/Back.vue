<template>
  <main>
    <h1 class="main-title">Back skills</h1>
    <Table 
      side="back"
      :tableName="back"
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
        'back'
      ])
    },
  }
</script>

<style lang="scss" scoped>



</style>