<script setup>
const stats = [
  { label: 'File Tersimpan', value: '1.2M+' },
  { label: 'Node Aktif', value: '312' },
  { label: 'Waktu Verifikasi', value: '< 3s' },
  { label: 'Audit Tuntas', value: '4.8/5' },
]
</script>

<template>
  <section class="page-padding">
    <div class="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-white/5 bg-gradient-to-r from-slate-900/90 to-black/60 px-8 py-6">
      <div v-for="stat in stats" :key="stat.label" class="space-y-1">
        <p class="text-2xl font-semibold text-white">{{ stat.value }}</p>
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>


