<script setup lang="ts">
import "@/assets/styles/auth-layout.css"
</script>

<template>
  <div class="wrap">
    <header class="header">
      <h1>eVote</h1>
      <h2>Система электронного голосования</h2>
    </header>

    <main class="content">
      <router-view/>
    </main>
  </div>
</template>
