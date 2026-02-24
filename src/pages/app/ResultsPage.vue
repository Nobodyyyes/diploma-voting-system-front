<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const id = computed(() => String(route.params.id));

const results = [
  {name: "Кандидат A", votes: 12},
  {name: "Кандидат B", votes: 9},
  {name: "Кандидат C", votes: 3},
];
</script>

<template>
  <div>
    <h2>Результаты #{{ id }}</h2>
    <p class="muted">Здесь позже подключим график (Chart.js) и реальный API.</p>

    <table class="table">
      <thead>
      <tr>
        <th>Вариант</th>
        <th>Голоса</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="r in results" :key="r.name">
        <td>{{ r.name }}</td>
        <td>{{ r.votes }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.muted {
  opacity: .75;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>