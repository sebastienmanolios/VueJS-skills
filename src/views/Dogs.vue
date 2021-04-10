<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <Table 
      species="dogs"
      :tableName="dogs"
    />
  </div>
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
        'dogs'
      ])
    },
  }
</script>

<style lang="scss" scoped>



</style>