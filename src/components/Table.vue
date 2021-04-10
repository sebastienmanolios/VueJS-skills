<template>
  <div>
    <table class="pet-table">
        <thead class="pet-table__categories">
          <tr class="tr"> 
            <th class="pet-table__category" 
              v-for="(value, key, index) in tableName[0]"
              :key="index"
            >
              {{ key }}
            </th>
          </tr>
        </thead>

        <tbody>
        <tr v-for="(pet, index1) in tableName" :key="index1">
            <td class="pet-table__value" 
              v-for="(value, key, index2) in pet" 
              :key="index2"
            >
              <span v-if="index2 === 0" class="test">
                <router-link :to="`/pets/${species}/${index1}`">{{ value }}</router-link>
              </span>
              <span v-else>
              {{ value }}
              </span>
            </td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  export default {
    props : {
      species: String,
      tableName: Array
    }
    
    
  }
</script>

<style lang="scss" scoped>

  .pet-table {
    margin: 2rem auto 0 auto;
  }

  .pet-table__category {
    font-size: 1.1rem;
    padding: .8rem 1.5rem .8rem 1.5rem;
    text-transform: capitalize;
  }

  .pet-table__categories {
    border-top: solid .5px black
  }

  .pet-table__value {
    padding-top:1.1rem;
    border-top: solid .5px black;
    border-bottom : solid .5px black;
  }

</style>