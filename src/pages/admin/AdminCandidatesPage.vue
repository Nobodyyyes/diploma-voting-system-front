<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const electionId = computed(() => String(route.params.id));

const name = ref("");
const candidates = ref([{id: "a", name: "Кандидат A"}]);

function add() {
  if (!name.value.trim()) return;
  candidates.value.push({id: crypto.randomUUID(), name: name.value.trim()});
  name.value = "";
}
</script>

<template>
  <div>
    <h2>Кандидаты (Election #{{ electionId }})</h2>

    <div class="bar">
      <input v-model="name" placeholder="Имя кандидата"/>
      <button class="btn" @click="add">Добавить</button>
    </div>

    <ul>
      <li v-for="c in candidates" :key="c.id">{{ c.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.bar {
  display: flex;
  gap: 10px;
  margin: 12px 0;
}

input {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.btn {
  padding: 8px 10px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 10px;
  cursor: pointer;
}
</style>