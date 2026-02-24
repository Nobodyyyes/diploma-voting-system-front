<script setup lang="ts">
const events = [
  {ts: "2026-02-22 12:01", user: "admin", action: "ELECTION_CREATE", status: "SUCCESS"},
  {ts: "2026-02-22 12:05", user: "user1", action: "VOTE_CAST", status: "SUCCESS"},
];
</script>

<template>
  <div>
    <h2>Аудит</h2>

    <table class="table">
      <thead>
      <tr>
        <th>Time</th>
        <th>User</th>
        <th>Action</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="e in events" :key="e.ts + e.action">
        <td>{{ e.ts }}</td>
        <td>{{ e.user }}</td>
        <td>{{ e.action }}</td>
        <td>{{ e.status }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
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