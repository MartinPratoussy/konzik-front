import { defineStore } from 'pinia'
import axios from 'axios'

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
      // this.addEvent(101, "11/10/2022", "Sting", "Pop", "Le fil", "Saint-Etienne", "France")
      // this.addEvent(102, "08/12/2022", "Gazo", "Rap", "Transbo", "Lyon", "France")
      // this.addEvent(101, "11/10/2022", "Sting", "Pop", "Le fil", "Saint-Etienne", "France")

      var config = {
        method: 'get',
        url: 'https://api.descours.cc/CONCERT-SERVICE/api/concert/all',
        headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        },
    };

    axios(config)
        .then((response) => {
            response.data.forEach(el => this.addEvent(el.idEvent, el.date, el.artist, el.genre, el.location, el.city, el.country))
        })
        .catch(function (error) {
        console.log(error);
    });
      
    },
  }
})
