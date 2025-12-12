<script setup>
const features = [
  {
    title: 'Proof-of-Presence',
    description: 'Setiap file mendapatkan bukti waktu dan lokasi node yang menyimpannya.',
  },
  {
    title: 'Kontrol Akses Granular',
    description: 'Batasi siapa yang dapat melihat, mengunduh, atau memverifikasi dokumen.',
  },
  {
    title: 'Laporan Kepatuhan',
    description: 'Ekspor riwayat akses untuk kebutuhan audit ISO atau internal.',
  },
  {
    title: 'Integrasi API',
    description: 'Hubungkan BlockSeal ke aplikasi Anda lewat REST/GraphQL siap pakai.',
  },
  {
    title: 'Notifikasi Real-time',
    description: 'Dapatkan alert instan ketika file diunduh atau diverifikasi.',
  },
  {
    title: 'Optimisasi Multi-cloud',
    description: 'Node berada di multi-cloud untuk menghindari vendor lock-in.',
  },
]
</script>

<template>
  <section class="page-padding space-y-6">
    <div class="flex flex-col gap-3 text-center">
      <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">Fitur BlockSeal</p>
      <h2 class="section-title">Layanan yang Siap Anda Gunakan</h2>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
      <article v-for="feature in features" :key="feature.title" class="glass-panel p-6">
        <h3 class="text-xl font-semibold text-white">{{ feature.title }}</h3>
        <p class="mt-2 text-sm text-slate-400">
          {{ feature.description }}
        </p>
      </article>
    </div>
  </section>
</template>



