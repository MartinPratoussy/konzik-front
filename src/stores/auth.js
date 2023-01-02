import { defineStore } from 'pinia';
import { router } from "@/router"
import axios from 'axios'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: localStorage.getItem('user'),
        returnUrl: null,
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
    },

    actions: {
        async login(username, password) {
            // // send request
            // const user = await axios.post("localhost/api/auth/signin", { username, password }).then((response) => console.log(response))
            
            // // update pinia state
            // this.user = user;

            this.user = [{ id: 1, email: 'admin@gmail.com', username: 'admin', password: 'admin' }];

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', username);

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },

        logout() {
            this.user = null;
            localStorage.removeItem('user');
            this.userEvents = []
            router.push('/login');
        },

        // Add new event in the store
        addUserEvent(idEvent, date, artist, genre, location, city, country) {
            this.userEvents.push({idEvent, date, artist, genre, location, city, country})
        },
    
        // Add new event in the store
        reloadUserEvents() {
            // Clear
            this.events = []
    
            // Add
            this.addUserEvent(101, "11/10/2022", "Sting", "Pop", "Le fil", "Saint-Etienne", "France")
            this.addUserEvent(102, "08/12/2022", "Gazo", "Rap", "Transbo", "Lyon", "France")
            this.addUserEvent(101, "11/10/2022", "Sting", "Pop", "Le fil", "Saint-Etienne", "France")
    
            // let fetched_response = {}
            // axios.get('localhost/').then((response) => {console.log(response), fetched_response = response})
            // fetched_response.forEach(el => this.addEvent(el.idEvent, el.date, el.artist, el.genre, el.location, el.city, el.country));
        },
    }
});