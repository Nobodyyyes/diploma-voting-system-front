<script setup lang="ts">
import {computed} from "vue";
import {useAuthStore} from "@/stores/auth.store";
import "@/assets/styles/app-layout.css"

const auth = useAuthStore();
const username = computed(() => auth.user?.username ?? "Пользователь");
</script>

<template>
  <div class="wrap">
    <header class="topbar">
      <h2>eVote</h2>
      <h2>Система электронного голосования</h2>
      <div class="right">
        <span class="muted">{{ username }}</span>
        <button class="btn" @click="auth.logout()">Выйти</button>
      </div>
    </header>

    <div class="body">
      <nav class="sidebar">
        <RouterLink to="/app/elections">Голосование</RouterLink>
        <RouterLink to="/app/settings">Настройки</RouterLink>
      </nav>

      <main class="content">
        <div class="page">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>
