<template>
  <div class="mx-auto flex items-center flex-col py-5">
    <h1 class="text-3xl my-5 text-slate-100">Admin Users</h1>
    <div v-if="arrayUsers.length > 0">
      <TableApp
        :changeShow="changeShow"
        :updateArrayUsers="updateArrayUsers"
        :arrayUsers="arrayUsers"
      />
    </div>
    <Transition>
      <div v-if="show" class="overlay flex justify-center items-center">
        <ModalUpdateApp
          :changeShow="changeShow"
          :idUser="idUser"
          :updateUser="updateUser"
        />
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "../helpers/usersApi";
import TableApp from "../components/TableApp.vue";
import ModalUpdateApp from "../components/ModalUpdateApp.vue";

const show = ref(false);
const idUser = ref(null);
const arrayUsers = ref([]);

onMounted(async () => {
  arrayUsers.value = await getUsers();
});

const updateArrayUsers = (array) => {
  arrayUsers.value = [...array];
};

const changeShow = (usuario) => {
  show.value = !show.value;
  idUser.value = { ...usuario };
};

const updateUser = (data) => {
  const index = arrayUsers.value.findIndex((item) => item.id == data.id);
  arrayUsers.value[index] = data;
  show.value = false;
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
