<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const receiptId = computed(() => String(route.query.receiptId ?? ""));
</script>

<template>
  <div>
    <h2>Голос принят</h2>
    <p class="muted">Сохраните квитанцию. Она подтверждает факт учета голоса (без раскрытия выбора).</p>

    <div class="card">
      <div class="label">Receipt ID</div>
      <code class="code">{{ receiptId || "—" }}</code>
    </div>

    <div style="margin-top: 12px;">
      <RouterLink to="/app/elections">К списку голосований</RouterLink>
    </div>
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

.label {
  opacity: .7;
  font-size: 12px;
  margin-bottom: 6px;
}

.code {
  display: block;
  padding: 10px;
  border: 1px dashed #bbb;
  border-radius: 10px;
  overflow-x: auto;
}
</style>