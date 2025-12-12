<script setup>
defineProps({
  title: {
    type: String,
    default: 'Tempat Gambar',
  },
  note: {
    type: String,
    default: 'Simpan gambar lokal di folder src/assets/images lalu ganti konten komponen ini.',
  },
})
</script>

<template>
  <div
    class="flex h-full min-h-[260px] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-brand-blue/40 bg-slate-900/70 p-6 text-center text-slate-400"
  >
    <div class="flex flex-col items-center gap-3">
      <div class="flex h-16 w-16 items-center justify-center rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue">
        <span class="text-2xl">🖼️</span>
      </div>
      <p class="text-lg font-medium text-white">{{ title }}</p>
      <p class="text-sm text-slate-400">
        {{ note }}
      </p>
      <p class="text-xs text-slate-500">
        Ganti elemen ini dengan
        <code class="rounded bg-black/40 px-1">img</code> atau konten visual lain sesuai kebutuhan.
      </p>
    </div>
  </div>
</template>


