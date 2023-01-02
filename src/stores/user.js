import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {idUser : undefined},
    userEvents: []
  }),

  getters: {
    // Get the lenght of userEvents tab
    getUserEventsLenght() {
      return this.userEvents.length
    },

    // Get the events of userEvents tab
    getUserEvents() {
      return this.userEvents
    },

    // Get user's data
    getUserData() {
        return this.user
    },
  },

  actions: {
    // Add custom event in user's events store
    addCustomEvent(idEvent, date, artist, genre, location, city, country) {
        this.userEvents.push({idEvent, date, artist, genre, location, city, country})
    },
  }
})
