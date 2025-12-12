<script setup>
const reasons = [
  {
    title: 'Skoring Keamanan',
    detail: 'Skor keamanan otomatis berdasarkan rating node dan algoritma reputasi.',
  },
  {
    title: 'Biaya Transparan',
    detail: 'Hitung biaya penyimpanan secara real-time, tanpa biaya tersembunyi.',
  },
  {
    title: 'UI/UX Intuitif',
    detail: 'Antarmuka responsif dengan dukungan bahasa Indonesia penuh.',
  },
]
</script>

<template>
  <section class="page-padding glass-panel flex flex-col gap-6 p-8">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">Kenapa BlockSeal?</p>
      <h2 class="mt-2 text-3xl font-semibold text-white">Transparan, aman, dan mudah diadopsi.</h2>
      <p class="mt-3 text-slate-400">
        Kami membangun sistem yang mempercepat proses digitalisasi dokumen penting tanpa mengorbankan
        keamanan.
      </p>
    </div>
    <div class="grid gap-5 md:grid-cols-3">
      <article v-for="reason in reasons" :key="reason.title" class="rounded-2xl border border-white/5 bg-black/40 p-5">
        <h3 class="text-lg font-semibold text-white">{{ reason.title }}</h3>
        <p class="mt-2 text-sm text-slate-400">{{ reason.detail }}</p>
      </article>
    </div>
  </section>
</template>


