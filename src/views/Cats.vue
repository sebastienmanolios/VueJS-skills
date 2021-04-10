<template>
  <div>
    <h1>Cats for Adoption</h1>
    <Table 
      species="cats"
      :tableName="cats"
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
        'cats'
      ])
    },
  }
</script>

<style lang="scss" scoped>



</style>