<script setup lang="ts">
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/stores/auth.store";
import "@/assets/styles/login-page.css"

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
  <div class="login-wrapper">
    <div class="login-card">
      <h2>Вход в систему</h2>

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

        <div class="register-link">
          Нет учетной записи?
          <RouterLink to="/register">Зарегистрироваться</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>
