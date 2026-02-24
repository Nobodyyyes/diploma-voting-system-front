<script setup lang="ts">
import {useAuthStore} from "../stores/auth.store";

const auth = useAuthStore();
</script>

<template>
  <div class="wrap">
    <header class="topbar">
      <div class="brand">eVote Admin</div>
      <div class="right">
        <button class="btn" @click="auth.logout()">Выйти</button>
      </div>
    </header>

    <div class="body">
      <nav class="sidebar">
        <RouterLink to="/admin">Dashboard</RouterLink>
        <RouterLink to="/admin/elections">Голосования</RouterLink>
        <RouterLink to="/admin/audit">Аудит</RouterLink>
      </nav>

      <main class="content">
        <slot/>
      </main>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
}

.brand {
  font-weight: 700;
}

.body {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: calc(100vh - 50px);
}

.sidebar {
  border-right: 1px solid #ddd;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.content {
  padding: 16px;
}

.btn {
  padding: 6px 10px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

a.router-link-active {
  font-weight: 700;
}
</style>