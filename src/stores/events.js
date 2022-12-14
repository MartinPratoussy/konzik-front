import { defineStore } from 'pinia'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [],
  }),
  getters: {
    getEventLenght() {
      return this.events.length
    },
    getEvents() {
      return this.events
    }
  },
  actions: {
    // Add new event in the store
    addEvent(idEvent, date, artist, genre, location, city, country) {
      this.events.push({idEvent, date, artist, genre, location, city, country})
    },

    // Add new event in the store
    reloadEvents() {
      // Clear
      this.events = []

      // Add
      this.addEvent(101, "11/10/2022", "Sting", "Pop", "Le fil", "Saint-Etienne", "France")
      this.addEvent(102, "08/12/2022", "Gazo", "Rap", "Transbo", "Lyon", "France")
      this.addEvent(101, "11/10/2022", "Sting", "Pop", "Le fil", "Saint-Etienne", "France")
    },
  }
})
