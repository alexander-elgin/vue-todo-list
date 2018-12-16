import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'activities'

export default new Vuex.Store({
  state: {
    activities: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions: {
    add ({ commit }, title) {
      commit('add', {
        title,
        done: false
      })
    },
    remove ({ commit }, activity) {
      commit('remove', {
        activity
      })
    },
    toggle ({ commit }, activity) {
      commit('toggle', {
        activity,
        done: !activity.done
      })
    }
  },
  mutations: {
    add (state, activity) {
      state.activities.push(activity)
    },
    remove (state, { activity }) {
      state.activities.splice(state.activities.indexOf(activity), 1)
    },
    toggle (state, { activity, done }) {
      activity.done = done
    }
  },
  plugins: [
    store => {
      store.subscribe((mutation, { activities }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(activities))
      })
    }
  ]
})
