<template>
  <div class="mx-auto flex items-center flex-col py-5">
    <h1 class="text-3xl my-5 text-slate-100">Admin Users</h1>

    <TableApp
      v-if="arrayUsers && arrayUsers.length > 0"
      :changeShow="changeShow"
      :deleteUser="deleteUser"
      :arrayUsers="arrayUsers"
    />

    <Transition>
      <div v-if="show" class="overlay flex justify-center items-center">
        <ModalUpdateApp
          :changeShow="changeShow"
          :idUser="idUser"
          :updateUser="updateUser"
          :addUser="addUser"
        />
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import Swal from "sweetalert2";
import { getUsers } from "../helpers/usersApi";
import TableApp from "../components/TableApp.vue";
import ModalUpdateApp from "../components/ModalUpdateApp.vue";

const show = ref(false);
const idUser = ref(null);
const arrayUsers = ref([]);

onMounted(async () => {
  const validar = JSON.parse(localStorage.getItem("users")) || null;
  if (!validar) {
    arrayUsers.value = await getUsers();
    localStorage.setItem("users", JSON.stringify(arrayUsers.value));
  } else {
    arrayUsers.value = [...validar];
  }
});

watch(arrayUsers, (newArray) => {
  localStorage.setItem("users", JSON.stringify(newArray));
});

const changeShow = (usuario) => {
  show.value = !show.value;
  if (usuario) {
    idUser.value = { ...usuario };
  } else {
    idUser.value = null;
  }
};
const addUser = (data) => {
  const validar = arrayUsers.value.find((user) => {
    return user.email == data.email || user.username == data.username;
  });

  if (!validar) {
    arrayUsers.value = [...arrayUsers.value, data];
    show.value = false;
  } else {
    Swal.fire({
      title: `The entered data already belongs to a user.`,
      confirmButtonText: "Ok",
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
  }
};
const updateUser = (data) => {
  const index = arrayUsers.value.findIndex((item) => item.id == data.id);
  arrayUsers.value[index] = { ...data };
  localStorage.setItem("users", JSON.stringify(arrayUsers.value));
  show.value = false;
};

const deleteUser = (id) => {
  Swal.fire({
    title: "Are you sure you want to delete this user?",
    showCancelButton: true,
    confirmButtonText: "Delete",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      const newArray = arrayUsers.value.filter((item) => {
        return item.id !== id;
      });
      arrayUsers.value = [...newArray];
    }
  });
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
