import { defineStore } from 'pinia';
import { router } from "@/router"

// import { fetchWrapper } from '@/fetch/fetch-wrapper';
// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: localStorage.getItem('user'),
        returnUrl: null,
    }),

    actions: {
        async login(username, password) {
            // --> const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
            // update pinia state
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
            router.push('/login');
        }
    }
});