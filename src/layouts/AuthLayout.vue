<template>
  <div class="wrap">
    <header class="header">
      <h1>eVote</h1>
      <h2>Электронное голосование</h2>
    </header>

    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.header {
  text-align: center;
  margin-bottom: 1px;
  color: white;
}

.content {
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  padding: 16px;
}
</style>