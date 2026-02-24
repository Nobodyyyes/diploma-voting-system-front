<script setup lang="ts">
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const id = computed(() => String(route.params.id));

const election = computed(() => ({
  id: id.value,
  title: `Голосование #${id.value}`,
  description: "Описание голосования. Здесь правила и детали.",
  status: "ACTIVE" as const,
  startsAt: "2026-02-22 10:00",
  endsAt: "2026-02-23 10:00",
  rule: "ONE_OF_N" as const, // или MULTI_UP_TO_K
}));

function goVote() {
  router.push(`/app/elections/${id.value}/vote`);
}
</script>

<template>
  <div>
    <h2>{{ election.title }}</h2>
    <p class="muted">Статус: {{ election.status }}</p>
    <p class="muted">Начало: {{ election.startsAt }} | Конец: {{ election.endsAt }}</p>

    <section class="card">
      <h3>Описание</h3>
      <p>{{ election.description }}</p>

      <h3>Правила</h3>
      <p v-if="election.rule === 'ONE_OF_N'">Можно выбрать только 1 вариант.</p>
      <p v-else>Можно выбрать несколько вариантов (до K).</p>

      <div class="actions">
        <button class="btn" @click="goVote">Перейти к голосованию</button>
        <RouterLink class="btn" :to="`/app/elections/${id}/results`">Результаты</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.muted {
  opacity: .75;
}

.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.btn {
  padding: 8px 10px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
</style>