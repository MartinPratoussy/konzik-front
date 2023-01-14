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

            var data = JSON.stringify({
                "username": username,
                "password": password
            });
            
            var config = {
                method: 'post',
                url: 'https://api.descours.cc/AUTH-SERVICE/api/auth/signin',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
            };

            axios(config)
                .then(function (response) {
                    if (response.data.hasOwnProperty("accessToken")){
                        console.log(response.data)

                        // store the token and create the user
                        localStorage.setItem("token", response.data.accessToken)
                        //this.user = [{ id: response.data.id, email: response.data.email, username: response.data.username, roles: response.data.roles }];

                        // store user details and jwt in local storage to keep user logged in between page refreshes
                        localStorage.setItem('user', username);
    
                        // redirect to previous url or default to home page
                        router.push(this.returnUrl || '/');
                    }
                }).catch(function (error) {
                    console.log(error);
            });
        },

        logout() {
            this.user = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
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
            this.userEvents = []
    
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