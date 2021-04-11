<template>
  <div>
    <table class="skill-table">
        <thead class="skill-table__categories">
          <tr class="tr"> 
            <th class="skill-table__category" 
              v-for="(value, key, index) in tableName[0]"
              :key="index"
            >
              {{ key }}
            </th>
          </tr>
        </thead>

        <tbody>
        <tr v-for="(skill, index1) in tableName" :key="index1">
            <td class="skill-table__value" 
              v-for="(value, key, index2) in skill" 
              :key="index2"
            >
              <span v-if="index2 === 0" >
                <router-link class="skill-table__link" :to="`/skills/${side}/${index1}`">{{ value }}</router-link>
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
      side: String,
      tableName: Array
    }
    
    
  }
</script>

<style lang="scss" scoped>

  .skill-table {
    margin: 2rem auto 0 auto;
    &__category {
      font-size: 1.1rem;
      padding: .8rem 1.5rem .8rem 1.5rem;
      text-transform: capitalize;
    }
    &__categories {
      border-top: solid .5px black
    }  
    &__value {
      padding-top:1.1rem;
      border-top: solid .5px black;
      border-bottom : solid .5px black;
    }
    &__link {
      color: green;
      font-size: 1.2em;
    }
  }

</style>