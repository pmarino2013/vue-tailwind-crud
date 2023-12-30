<template>
  <div class="p-2 bg-slate-100 rounded-lg w-1/2">
    <div class="flex justify-end px-3">
      <button @click="changeShow(null)">X</button>
    </div>
    <h3 class="text-lg font-bold text-center mb-3">User Update</h3>

    <form class="w-full px-2" @submit.prevent="handleSubmit">
      <div class="flex gap-2 mb-2">
        <div class="w-1/2">
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Name</span>
            <input
              type="text"
              v-model="userChange.name"
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </div>
        <div class="w-1/2">
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Email</span>
            <input
              type="text"
              v-model="userChange.email"
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </div>
      </div>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Company</span>
        <input
          type="text"
          v-model="userChange.company.name"
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>
      <div class="my-3 flex justify-end">
        <button
          class="px-4 py-1 text-sm text-slate-600 font-semibold rounded-full border border-slate-300 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
const props = defineProps({
  changeShow: Function,
  idUser: Object,
  updateUser: Function,
});

import { ref } from "vue";

const userChange = ref(props.idUser);

const handleSubmit = () => {
  props.updateUser(userChange);
};
</script>
<style scope></style>
