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

    // Check if there is a user
    userConnected() {
      if (this.getUserData["idUser"] !== undefined) {
        return true
      }
      return false
    }
  },

  actions: {
    // Add custom event in user's events store
    addCustomEvent(idEvent, date, artist, genre, location, city, country) {
        this.userEvents.push({idEvent, date, artist, genre, location, city, country})
    },

    // Add offical event in user's events store
    addOfficialEvent(event) {
        this.userEvents.push(event)
    },

    // Setup the user
    userSetup(user) {
        console.log("this.user['userID'] BEFORE")
        console.log(this.user['userID'])
        this.user['userID'] = user['userID']

        console.log("this.user['userID'] AFTER")
        console.log(this.user['userID'])
    }
  }
})
