import Vue from 'vue'
import Vuex from 'vuex'

import cats from '../data/cats'
import dogs from '../data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },

  getters: {
    animalsCount: (state) => {
      return state.cats.length + state.dogs.length
    },
    getAllCats: (state) => {
      return state.pets.filter((pet) => {
        return pet.species === 'cat'
      })
    }
  },

  mutations: {
    appendPet: (state, { species, pet }) => {
      state[species].push(pet)
    }
  },
  
  actions: {
    // addPet: (context, pet) => {
    //   context.commit('appendPet', pet)
    // }
    // addPet: ({ commit }, { pet, species }) => {
    //   commit('appendPet', pet, species)
    // }
    addPet: ({ commit }, payload) => {
      commit('appendPet', payload)
    }
  },
  modules: {
  }
})
