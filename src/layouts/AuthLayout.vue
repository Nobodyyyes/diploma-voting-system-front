<template>
  <div class="wrap">
    <header class="header">
      <h1>eVote</h1>
      <p class="muted">Электронное голосование</p>
    </header>

    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.header {
  text-align: center;
  margin-bottom: 16px;
}

.muted {
  opacity: 0.7;
  margin: 0;
}

.content {
  width: 100%;
  max-width: 420px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
}
</style>