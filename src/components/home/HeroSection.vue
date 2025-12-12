<script setup>
import ImageTemplate from '@/components/common/ImageTemplate.vue'

const highlights = [
  { label: 'Keamanan Blockchain', value: 'Hash immutable' },
  { label: 'Distribusi Global', value: 'Node multi-region' },
  { label: 'Audit Instan', value: '< 3 detik' },
]
</script>

<template>
  <section class="page-padding grid gap-10 lg:grid-cols-2 lg:items-center">
    <div class="space-y-6">
      <p class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-brand-blue">
        ⚡ Sistem Berbagi File On-Chain
      </p>
      <div class="space-y-4">
        <h1 class="text-4xl font-semibold text-white md:text-5xl">
          BlockSeal memverifikasi setiap file dengan sertifikat kriptografi yang tak bisa dipalsukan.
        </h1>
        <p class="text-lg text-slate-300">
          Bagikan, unggah, dan validasi dokumen penting hanya dalam beberapa detik. Tidak perlu
          khawatir hilang atau dimanipulasi—setiap perubahan terekam otomatis di blockchain.
        </p>
      </div>
      <div class="flex flex-wrap gap-3">
        <RouterLink
          to="/upload"
          class="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-300"
        >
          Unggah Sekarang
        </RouterLink>
        <RouterLink
          to="/verify"
          class="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Coba Verifikasi
        </RouterLink>
      </div>

      <div class="grid gap-4 rounded-3xl border border-white/5 bg-black/40 p-4 sm:grid-cols-3">
        <div v-for="item in highlights" :key="item.label">
          <p class="text-xs uppercase tracking-wide text-slate-500">{{ item.label }}</p>
          <p class="text-lg font-semibold text-white">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <div class="glass-panel p-6">
      <ImageTemplate
        title="Visual Arsitektur BlockSeal"
        note="Gunakan grid flex ini untuk menaruh diagram sistem atau mockup antarmuka secara lokal."
      />
    </div>
  </section>
</template>


