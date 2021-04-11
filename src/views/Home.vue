<template>
  <div class="home-view-container">
    <h1 class="main-title">My skills about IT</h1>
    <h3>How many skills do I have ?</h3>
    <h4>{{ skillsCount }}</h4>
    <h3>How many front skills do I have ?</h3>
    <h4>{{ getAllFrontSkills.length }}</h4>

    <button class="btn btn-primary" @click="toggleSkillForm">Add new skill</button>

    <b-form class="form" @submit.prevent="handleSubmit" v-if="showSkillForm">
      <b-form-group class="form_item" id="exampleInputGroup2" label="Skills's Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name" />
      </b-form-group>

      <b-form-group class="form_item" id="exampleInputGroup3" label="Front/Back" label-for="exampleInput3">
        <b-form-select id="exampleInput3" :options="['front', 'back', 'other']" required v-model="formData.side" />
      </b-form-group>

      <b-form-group class="form_item" id="exampleInputGroup2" label="Year's experience:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="number"
          v-model="formData.years"
          required
          placeholder="Enter age" />
      </b-form-group>

      <b-form-group class="form_item" id="exampleInputGroup4" label="How much do you like it ?" label-for="exampleInput4">
        <b-form-select id="exampleInput4" :options="['nice', 'very nice', 'amazing']" required v-model="formData.appetite" />
      </b-form-group>

      <b-button class="action-btn" type="submit" variant="primary">Submit</b-button>
      <b-button class="action-btn" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
  data () {
    return {
      showSkillForm : false,
      formData: {
        side: null,
        name: '',
        years: 0,
        appetite: null
      }
    }
  },

  computed: {
    ...mapGetters ([
      'skillsCount',
      'getAllFrontSkills'
    ])
  },

  methods: {
    ...mapActions ([
      'addSkill'
    ]),
    toggleSkillForm () {
      this.showSkillForm = !this.showSkillForm 
    },
    handleSubmit () {
      const { side, name, years, appetite } = this.formData
      const payload = {
        side,
        skill: {
          name,
          side,
          years,
          appetite
        }
      }
      console.log('payload' + payload)
      this.addSkill(payload)
      this.formData = {
        side: null,
        name: '',
        years: 0,
        appetite: null
      }
    }
  }
  }
</script>

<style lang="scss" scoped>

  .main-title {
    font-size: 2.3rem;
    margin-top: 2rem;
  }

  .form {
    margin-top: 1.8rem;
    width:50%;
    margin-left: 6rem;


    &-item {
      width:50%;
    }
  }

  .btn {
    margin-top: 1.5rem;
    background-color: #1f4646;
  }

  .action-btn {
    margin-left: .8em;
  }

  @media only screen and (min-width: 1200px) {
    .form {
      margin-left: 18rem;
      width:50%;
    }
  }

 
</style>


