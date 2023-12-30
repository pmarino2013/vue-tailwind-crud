<template>
  <div class="h-20 p-2 bg-slate-100 rounded-lg">
    <div class="flex justify-end">
      <button @click="changeShow()">X</button>
    </div>
    <h3 class="text-lg font-bold">User Update</h3>
  </div>
</template>
<script setup>
const props = defineProps({
  changeShow: Function,
});
</script>
<style scope></style>
