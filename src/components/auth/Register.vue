<script setup>
import { ref } from 'vue'
import axios from 'axios'

const usernameData = ref("")
const emailData = ref("")
const passwordData =  ref("")

const registerClick = () => {
    const username = usernameData.value
    const email = emailData.value
    const password = passwordData.value

    var data = JSON.stringify({
    "username": username,
    "email": email,
    "roles": [
        username,
        "ROLE_USER"
    ],
    "password": password
    });

    var config = {
    method: 'post',
    url: 'https://api.descours.cc/AUTH-SERVICE/api/auth/signup',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}
</script>

<template>
    <div class="flex absolute my-40 ml-80">
        <div class="block p-6 rounded-xl shadow-2xl bg-white w-96 h-80">
            <h1 class="w-full text-2xl font-bold text-center pb-5">Inscrivez-vous</h1>
            <div class="form-group mb-6">
                <input name="username" v-model="usernameData" type="text" class="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Nom d'utilisateur">
            </div>
            <div class="form-group mb-6">
            <input name="email" v-model="emailData" type="email" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email">
            </div>
            <div class="form-group mb-6">
            <input name="password" v-model="passwordData" type="password" class="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Mot de passe">
            </div>
            <button @click="registerClick" class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">S'enregistrer</button>
        </div>
    </div>
</template>