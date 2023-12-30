<template>
  <div class="mx-auto flex items-center flex-col py-5">
    <h1 class="text-3xl my-5 text-slate-100">Admin Users</h1>
    <div>
      <TableApp :changeShow="changeShow" />
      <div class="text-center">
        <h3>Plase wait...</h3>
      </div>
    </div>
    <Transition>
      <div v-if="show" class="overlay flex justify-center items-center">
        <ModalUpdateApp :changeShow="changeShow" />
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TableApp from "../components/TableApp.vue";
import ModalUpdateApp from "../components/ModalUpdateApp.vue";
const show = ref(false);
const changeShow = () => {
  show.value = !show.value;
};
</script>

<style scope>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.409);
}
</style>
