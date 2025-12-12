<script setup>
const historyItems = [
  {
    filename: 'Laporan-Keuangan-Q3.pdf',
    hash: '1ac5f9a0d3b64f1aa2...',
    status: 'verified',
    uploadedBy: 'Team Finance',
    date: '27 Nov 2025 • 09:12',
  },
  {
    filename: 'Kontrak-Kerjasama-Alpha.docx',
    hash: '9d44cbe182fa43d2cd...',
    status: 'verified',
    uploadedBy: 'Legal Squad',
    date: '26 Nov 2025 • 21:05',
  },
  {
    filename: 'Blueprint-Produk-v2.fig',
    hash: '2b77ccab4aef8a11de...',
    status: 'pending',
    uploadedBy: 'R&D Cell',
    date: '26 Nov 2025 • 14:47',
  },
]
</script>

<template>
  <section class="page-padding space-y-6">
    <div class="flex flex-col gap-2">
      <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">History</p>
      <h1 class="text-3xl font-semibold text-white">Riwayat Upload Pengguna</h1>
      <p class="text-sm text-slate-400">Lihat dokumen terakhir yang masuk ke BlockSeal.</p>
    </div>

    <div class="glass-panel overflow-hidden">
      <div class="grid grid-cols-1 divide-y divide-white/5">
        <article
          v-for="item in historyItems"
          :key="item.hash"
          class="grid gap-4 px-6 py-5 text-sm text-slate-200 md:grid-cols-[1.5fr,1fr,1fr,auto]"
        >
          <div>
            <p class="text-white">{{ item.filename }}</p>
            <p class="font-mono text-xs text-slate-500">{{ item.hash }}</p>
          </div>
          <p>{{ item.uploadedBy }}</p>
          <p>{{ item.date }}</p>
          <span
            class="h-fit rounded-full px-3 py-1 text-xs font-semibold"
            :class="item.status === 'verified' ? 'bg-emerald-400/20 text-emerald-300' : 'bg-amber-400/20 text-amber-200'"
          >
            {{ item.status }}
          </span>
        </article>
      </div>
    </div>
  </section>
</template>



