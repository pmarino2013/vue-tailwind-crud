<template>
  <div class="mx-auto flex items-center flex-col py-5">
    <h1 class="text-3xl my-5 text-slate-100">Admin Users</h1>
    <div>
      <TableApp :changeShow="changeShow" />
      <div class="text-center">
        <h3>Plase wait...</h3>
      </div>
    </div>
    <div v-if="show" class="overlay flex justify-center items-center">
      <div class="h-20 p-2 bg-slate-100 rounded-lg">
        <div class="flex justify-end">
          <button @click="changeShow()">X</button>
        </div>
        <h3 class="text-lg font-bold">User Update</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TableApp from "../components/TableApp.vue";

const show = ref(false);

const changeShow = () => {
  show.value = !show.value;
};
</script>
<style scope>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.409);
}
</style>
