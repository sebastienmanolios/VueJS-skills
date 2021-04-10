<template>
  <div class="home-view-container">
    <h1>Adopt new Best Friend</h1>
    <h2>How many animals do I have ?</h2>
    <h3>{{ animalsCount }}</h3>
    <h2>How many catss do I have ?</h2>
    <h3>{{ getAllCats.length }}</h3>

    <button class="btn btn-primary" @click="togglePetForm">Add new pet</button>

     <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="exampleInputGroup2" label="Pet's Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name" />
      </b-form-group>

      <b-form-group id="exampleInputGroup3" label="Species:" label-for="exampleInput3">
        <b-form-select id="exampleInput3" :options="['cats', 'dogs']" required v-model="formData.species" />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Pet's Age:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age" />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
  data () {
    return {
      showPetForm : false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },

  computed: {
    ...mapGetters ([
      'animalsCount',
      'getAllCats'
    ])
  },

  methods: {
    ...mapActions ([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm 
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      this.formData = {
        name: '',
        age: 0,
        species: null
      }

    }
  }
  }
</script>

<style lang="scss" scoped>

</style>


