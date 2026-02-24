<script setup lang="ts">
import {ref} from "vue";

type Election = {
  id: string;
  title: string;
  status: "ACTIVE" | "UPCOMING" | "CLOSED";
  startsAt: string;
  endsAt: string;
  voted: boolean;
};

const filter = ref<"ALL" | "ACTIVE" | "UPCOMING" | "CLOSED">("ALL");

const elections = ref<Election[]>([
  {
    id: "1",
    title: "Выбор старосты группы",
    status: "ACTIVE",
    startsAt: "2026-02-22 10:00",
    endsAt: "2026-02-23 10:00",
    voted: false
  },
  {
    id: "2",
    title: "Опрос по расписанию",
    status: "UPCOMING",
    startsAt: "2026-02-25 10:00",
    endsAt: "2026-02-26 10:00",
    voted: false
  },
  {
    id: "3",
    title: "Выбор темы мероприятия",
    status: "CLOSED",
    startsAt: "2026-02-01 10:00",
    endsAt: "2026-02-02 10:00",
    voted: true
  },
]);

const filtered = () => {
  if (filter.value === "ALL") return elections.value;
  return elections.value.filter((e) => e.status === filter.value);
};
</script>

<template>
  <div>
    <h2>Голосования</h2>

    <div class="bar">
      <label>
        Фильтр:
        <select v-model="filter">
          <option value="ALL">Все</option>
          <option value="ACTIVE">Активные</option>
          <option value="UPCOMING">Будущие</option>
          <option value="CLOSED">Завершенные</option>
        </select>
      </label>
    </div>

    <div class="grid">
      <article v-for="e in filtered()" :key="e.id" class="card">
        <div class="top">
          <h3 class="title">{{ e.title }}</h3>
          <span class="chip">{{ e.status }}</span>
        </div>
        <p class="muted">Начало: {{ e.startsAt }}</p>
        <p class="muted">Конец: {{ e.endsAt }}</p>

        <div class="actions">
          <RouterLink class="btn" :to="`/app/elections/${e.id}`">Открыть</RouterLink>
          <span v-if="e.voted" class="ok">Вы проголосовали</span>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.bar {
  margin: 12px 0;
}

select {
  margin-left: 8px;
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
}

.top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.title {
  margin: 0;
}

.chip {
  border: 1px solid #ccc;
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 12px;
  height: fit-content;
}

.muted {
  opacity: 0.75;
  margin: 6px 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.btn {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
}

.ok {
  color: #0a7a0a;
  font-size: 13px;
}
</style>