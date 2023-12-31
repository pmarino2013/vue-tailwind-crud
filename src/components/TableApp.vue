<template>
  <table class="border-collapse border border-slate-500">
    <thead>
      <tr class="bg-slate-600 text-center text-slate-200">
        <th class="border border-slate-500 p-3">#</th>
        <th class="border border-slate-500 p-3">Name</th>
        <th class="border border-slate-500 p-3">Username</th>
        <th class="border border-slate-500 p-3">Email</th>
        <th class="border border-slate-500 p-3"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="text-center bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
        v-for="user in arrayUsers"
        :key="user.id"
      >
        <td class="border border-slate-500 p-2">{{ user.id }}</td>
        <td class="border border-slate-500 p-2">{{ user.name }}</td>
        <td class="border border-slate-500 p-2">{{ user.username }}</td>
        <td class="border border-slate-500 p-2">{{ user.email }}</td>
        <td class="border border-slate-500 p-2">
          <div class="flex gap-3">
            <button @click="deleteUser(user.id)">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button @click="changeShow(user)">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
// import { onMounted, ref } from "vue";
const props = defineProps({
  changeShow: Function,
  deleteUser: Function,
  arrayUsers: Array,
});
</script>
<style scope></style>
