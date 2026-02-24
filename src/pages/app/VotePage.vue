<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const id = computed(() => String(route.params.id));

type Option = { id: string; name: string; desc?: string };

const rule = ref<"ONE_OF_N" | "MULTI_UP_TO_K">("ONE_OF_N");
const k = ref(2);

const options = ref<Option[]>([
  {id: "a", name: "Кандидат A"},
  {id: "b", name: "Кандидат B"},
  {id: "c", name: "Кандидат C"},
]);

const selectedSingle = ref<string>("");
const selectedMulti = ref<string[]>([]);
const error = ref<string | null>(null);

function submit() {
  error.value = null;

  const selected =
      rule.value === "ONE_OF_N"
          ? (selectedSingle.value ? [selectedSingle.value] : [])
          : selectedMulti.value;

  if (selected.length === 0) {
    error.value = "Выберите вариант";
    return;
  }

  if (rule.value === "MULTI_UP_TO_K" && selected.length > k.value) {
    error.value = `Можно выбрать максимум ${k.value}`;
    return;
  }

  // TODO: тут будет API POST /elections/{id}/vote
  // Сейчас демо: считаем, что успешно
  const receiptId = crypto.randomUUID();

  router.replace({path: `/app/elections/${id.value}/receipt`, query: {receiptId}});
}
</script>

<template>
  <div>
    <h2>Голосование #{{ id }}</h2>
    <p class="muted">Выберите вариант и отправьте голос.</p>

    <p v-if="error" class="error">{{ error }}</p>

    <section class="card">
      <div v-if="rule === 'ONE_OF_N'">
        <label v-for="o in options" :key="o.id" class="row">
          <input v-model="selectedSingle" type="radio" name="vote" :value="o.id"/>
          <span>{{ o.name }}</span>
        </label>
      </div>

      <div v-else>
        <p class="muted">Можно выбрать до {{ k }} вариантов</p>
        <label v-for="o in options" :key="o.id" class="row">
          <input v-model="selectedMulti" type="checkbox" :value="o.id"/>
          <span>{{ o.name }}</span>
        </label>
      </div>

      <div class="actions">
        <button class="btn" @click="submit">Отправить голос</button>
        <RouterLink class="btn" :to="`/app/elections/${id}`">Назад</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.muted {
  opacity: .75;
}

.error {
  color: #b00020;
}

.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
}

.row {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 6px 0;
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