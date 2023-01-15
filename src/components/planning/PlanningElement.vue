<script setup>
import axios from 'axios'

const props = defineProps({
  currentEvent: Object
});

const removeEvent = () => {
  var config = {
    method: 'delete',
    url: 'https://api.descours.cc/CONCERT-SERVICE/api/concert/users/'+localStorage.getItem('user')+'/remove/'+props.currentEvent.idEvent,
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
<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-stone-100 shadow-lg">
    <img class="md:h-auto object-cover md:w-44 rounded-t-lg md:rounded-none md:rounded-l-lg" src="@/images/card/headphone.jpg" alt="" />
    <div class="flex items-center mx-1 bg-stone-100">
    <div class="p-2 flex flex-col justify-start">
      <div class="flex">
        <h4 class="text-stone-800 text-lg font-bold pr-10">{{ props.currentEvent.artist }}</h4>
        <p class="text-gray-700 text-lg">{{ props.currentEvent.genre }}</p>
      </div>
      <div>
        <p class="text-gray-700 text-lg my-3">{{ props.currentEvent.date }}</p>
      </div>
      <div class="flex flex-wrap gap-x-3 w-72">
        <img class="md:h-5 object-cover md:w-5" src="@/images/card/location.png" alt="" />
        <p class="text-gray-600 text-sm">{{ props.currentEvent.location }}</p>
        <p class="text-gray-600 text-sm">{{ props.currentEvent.city }}</p>
        <p class="text-gray-600 text-sm">{{ props.currentEvent.country }}</p>
      </div>
    </div>
    <button class="px-4 mr-1 rounded-lg bg-red-600 hover:bg-red-700 h-10" @click="removeEvent()">Enlever</button>
  </div>
  </div>
</div>
</template>