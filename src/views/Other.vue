<template>
  <main>
    <h1 class="main-title">Other skills</h1>
    <Table 
      side="other"
      :tableName="other"
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
        'other'
      ])
    },
  }
</script>

<style lang="scss" scoped>

// .main-title {
//   margin-top: 1.5rem;
// }

</style>