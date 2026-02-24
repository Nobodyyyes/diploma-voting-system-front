<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const id = computed(() => String(route.params.id));

const title = ref("");
const description = ref("");
const startTime = ref("");
const endTime = ref("");
const status = ref<"DRAFT" | "PUBLISHED" | "ACTIVE" | "CLOSED">("DRAFT");

function save() {
  // TODO: PUT /api/admin/elections/{id}
  alert("Сохранено (демо)");
}
</script>

<template>
  <div>
    <h2>Редактирование голосования #{{ id }}</h2>

    <div class="form">
      <label>Название <input v-model="title"/></label>
      <label>Описание <textarea v-model="description" rows="4"></textarea></label>
      <label>Start time <input v-model="startTime" placeholder="2026-02-22T10:00"/></label>
      <label>End time <input v-model="endTime" placeholder="2026-02-23T10:00"/></label>
      <label>Статус
        <select v-model="status">
          <option value="DRAFT">DRAFT</option>
          <option value="PUBLISHED">PUBLISHED</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="CLOSED">CLOSED</option>
        </select>
      </label>

      <button class="btn" @click="save">Сохранить</button>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 640px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

input, textarea, select {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.btn {
  width: fit-content;
  padding: 8px 10px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 10px;
  cursor: pointer;
}
</style>