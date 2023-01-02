<script setup>
import { ref } from 'vue';
import axios from 'axios'

const name = ref("")
const type = ref("")
const date = ref("")
const place = ref("")
const city = ref("")
const country = ref("")

const addNewEvent = () => {
  send_name = name.value
  type_value = type.value
  date_value = date.value
  place_value = place.value
  city_value = city.value
  country_value = country.value

  // axios.post("localhost/add",{ send_name, type_value, date_value, place_value, city_value, country_value }).then((response) => console.log(response))
}
</script>

<template>
<div class="flex absolute w-screen h-screen justify-center pb-48 items-center bg-slate-900/[.9]">
<div class="block p-6 rounded-lg shadow-lg bg-white w-96">
  <form>
    <div class="w-full text-center pb-5 text-xl font-bold">
        <h1>Ajouter un evenement</h1>
    </div>
    <div class="form-group mb-6">
      <input type="text" v-model="name" class="form-control block
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
        placeholder="Nom">
    </div>
    <div class="form-group mb-6">
      <input type="text" v-model="type" class="form-control block
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
        placeholder="Type">
    </div>
    <div class="form-group mb-6">
      <input type="text" v-model="date" class="form-control block
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
        placeholder="Date (dd/mm/yy)">
    </div>
    <div class="form-group mb-6">
      <input type="text" v-model="place" class="form-control block
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
        placeholder="Lieu">
    </div>
    <div class="form-group mb-6">
      <input type="text" v-model="city" class="form-control block
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
        placeholder="Ville">
    </div>
    <div class="form-group mb-6">
      <input type="text" v-model="country" class="form-control block
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
        placeholder="Pays">
    </div>
    <div class="flex gap-x-2">
      <button type="button" @click="addNewEvent, $emit('close')" class="
        w-full
        px-6
        py-2.5
        bg-green-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-green-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Add</button>
      <button type="button" @click="$emit('close')" class="
        w-full
        px-6
        py-2.5
        bg-red-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-red-700 hover:shadow-lg
        focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-red-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Close</button>
    </div>
  </form>
</div>
</div>
</template>