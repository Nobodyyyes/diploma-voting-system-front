<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");
const error = ref<string | null>(null);

function submit() {
  error.value = null;

  if (!username.value.trim() || !password.value.trim()) {
    error.value = "Заполните логин и пароль";
    return;
  }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>Регистрация</h2>

      <p v-if="error" class="error"> {{ error }}</p>

      <form class="form" @submit.prevent="submit">
        <label>
          Логин
          <input v-model="username" autocomplete="username"/>
        </label>

        <label>
          Пароль
          <input v-model="password" type="password"/>
        </label>

        <button class="create-btn" type="submit">Создать аккаунт</button>

        <div class="register-link">
          Уже есть аккаунт?
          <RouterLink to="/login">Войти</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.login-card {
  width: 100%;
  max-width: 420px;
  padding: 32px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-top: 0;
  text-align: center;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
}

input {
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  transition: 0.2s;
}

input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.create-btn {
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  background: #2563eb;
  color: white;
  transition: 0.2s;
}

.create-btn:hover {
  background: #1d4ed8;
}

.error {
  color: #b00020;
  text-align: center;
}

.register-link {
  margin-top: 18px;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.register-link a {
  margin-left: 6px;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>