<script setup>
import PlanningTab from "../components/planning/PlanningTab.vue";
import AddEventForm from "../components/planning/AddEventForm.vue";
import { ref } from "vue";

const showModal = ref(false)
</script>

<template>
  <main>
    <AddEventForm v-if="showModal" @close="showModal = false" />
    <h2 class="text-5xl pt-4 font-bold flex justify-center w-2/4">Evenements</h2>
    <div>
      <PlanningTab />
    </div>
    <div class="mt-1 flex justify-center">
      <button @click="showModal = true" class="pb-2.5 inline-block rounded-full bg-cyan-400 text-white text-4xl shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none  focus:ring-0 active:bg-cyan-600 active:shadow-lg transition duration-150 ease-in-out w-14 h-14">+</button>
    </div>
  </main>
</template>
