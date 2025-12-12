<script setup>
const steps = [
  {
    title: '1. Enkripsi & Fragmentasi',
    description:
      'File dipecah ke dalam beberapa fragmen terenkripsi sehingga hanya pemilik hash yang dapat menyatukannya kembali.',
  },
  {
    title: '2. Penandatanganan On-Chain',
    description:
      'Setiap unggahan menghasilkan hash unik yang dicatat di blockchain publik sehingga mudah diaudit.',
  },
  {
    title: '3. Distribusi Node',
    description:
      'Fragmen tersebar otomatis ke node BlockSeal di berbagai wilayah untuk redundansi maksimal.',
  },
  {
    title: '4. Validasi & Pelacakan',
    description:
      'Saat diverifikasi, BlockSeal mencocokkan hash dan menampilkan riwayat akses agar transparan.',
  },
]
</script>

<template>
  <section class="page-padding space-y-8">
    <div class="flex flex-col gap-3 text-center">
      <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">Cara Kerja</p>
      <h2 class="section-title">Bagaimana BlockSeal Melindungi File Anda</h2>
      <p class="text-base text-slate-400">
        Setiap langkah dirancang untuk memastikan keamanan berlapis, integritas data, dan audit trail
        yang jelas.
      </p>
    </div>
    <div class="grid gap-6 lg:grid-cols-4">
      <article
        v-for="step in steps"
        :key="step.title"
        class="glass-panel flex flex-col gap-3 p-5"
      >
        <h3 class="text-lg font-semibold text-white">{{ step.title }}</h3>
        <p class="text-sm text-slate-400">{{ step.description }}</p>
      </article>
    </div>
  </section>
</template>


