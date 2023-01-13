<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const usernameData = ref("")
const passwordData =  ref("")

const loginClick = () => {
  const username = usernameData.value
  const password = passwordData.value

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
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}
</script>

<template>
<div class="flex absolute w-screen h-screen justify-center mt-40 ml-44">
<div class="block p-7 rounded-xl shadow-2xl bg-white w-96 h-80">
  <h1 class="w-full text-2xl font-bold text-center pb-5">Connectez-vous</h1>
  <div class="form-group mb-6">
    <input name="username" v-model="username" type="text" class="form-control
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
    <input name="password" v-model="password" type="password" class="form-control block
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
  <div class="flex justify-between items-center mb-6">
    <a href="#!"
      class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Mot de passe oublié ?</a>
  </div>
  <button @click="loginClick" class="
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
    ease-in-out">Se connecter</button>
</div>
</div>
</template>