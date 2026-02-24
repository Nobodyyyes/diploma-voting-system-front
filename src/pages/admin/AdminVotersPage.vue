<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const electionId = computed(() => String(route.params.id));

const voters = [
  {id: "u1", username: "user1", allowed: true},
  {id: "u2", username: "user2", allowed: false},
];
</script>

<template>
  <div>
    <h2>Избиратели (Election #{{ electionId }})</h2>
    <p class="muted">Тут будет выдача прав и импорт CSV (опционально).</p>

    <table class="table">
      <thead>
      <tr>
        <th>User</th>
        <th>Allowed</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="v in voters" :key="v.id">
        <td>{{ v.username }}</td>
        <td>{{ v.allowed ? "Yes" : "No" }}</td>
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