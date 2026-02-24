<script setup lang="ts">
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/stores/auth.store";

const router = useRouter();
const route = useRoute();
const auth = useAuthStore();

const username = ref("");
const password = ref("");
const asAdmin = ref(false);
const error = ref<string | null>(null);

function submit() {
  error.value = null;

  if (!username.value.trim() || !password.value.trim()) {
    error.value = "Введите логин и пароль";
    return;
  }

  auth.login(username.value.trim(), password.value)

  const next = (route.query.next as string | undefined) ?? (asAdmin.value ? "/admin" : "/app/elections");
  router.replace(next);
}
</script>

<template>
  <div>
    <h2>Вход</h2>

    <p v-if="error" class="error">{{ error }}</p>

    <form class="form" @submit.prevent="submit">
      <label>
        Логин
        <input v-model="username" autocomplete="username"/>
      </label>

      <label>
        Пароль
        <input v-model="password" type="password" autocomplete="current-password"/>
      </label>

      <label class="row">
        <input v-model="asAdmin" type="checkbox"/>
        Войти как админ (демо)
      </label>

      <button class="btn" type="submit">Войти</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

input {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.btn {
  margin-top: 6px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 10px;
  cursor: pointer;
}

.error {
  color: #b00020;
}

.row {
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
</style>