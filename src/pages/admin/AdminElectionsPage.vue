<script setup lang="ts">
const elections = [
  {id: "1", title: "Выбор старосты", status: "ACTIVE"},
  {id: "2", title: "Опрос по расписанию", status: "DRAFT"},
];
</script>

<template>
  <div>
    <h2>Голосования</h2>

    <div class="bar">
      <RouterLink class="btn" to="/admin/elections/new">+ Создать</RouterLink>
    </div>

    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Статус</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="e in elections" :key="e.id">
        <td>{{ e.id }}</td>
        <td>{{ e.title }}</td>
        <td>{{ e.status }}</td>
        <td class="actions">
          <RouterLink class="link" :to="`/admin/elections/${e.id}/edit`">Редактировать</RouterLink>
          <RouterLink class="link" :to="`/admin/elections/${e.id}/candidates`">Кандидаты</RouterLink>
          <RouterLink class="link" :to="`/admin/elections/${e.id}/voters`">Избиратели</RouterLink>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.bar {
  margin: 12px 0;
}

.btn {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.link {
  text-decoration: none;
}
</style>