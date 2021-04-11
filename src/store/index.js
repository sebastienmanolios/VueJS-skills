import Vue from 'vue'
import Vuex from 'vuex'

import back from '../data/back'
import front from '../data/front'
import other from '../data/other'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    front,
    back,
    other,
    skills: [...front, ...back, ...other]
  },

   getters: {
     skillsCount: (state) => {
       return state.skills.length
     },
     getAllFrontSkills: (state) => {
      return state.skills.filter((skill) => {
         return skill.side === 'front'
       })
    }
   },

   mutations: {
     appendSkill: (state, { side, skill }) => {
       state[side].push(skill)
     }
   },
  
  actions: {
     addSkill: ({ commit }, payload) => {
     commit('appendSkill', payload)
    }
  },
  modules: {
  }
})
