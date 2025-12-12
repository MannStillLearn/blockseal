<script setup>
const members = [
  { name: 'Muhammad Ainun Nasichin', role: 'CEO & Co-founder', focus: 'Strategi produk dan kemitraan enterprise.' },
  { name: 'Rayhan Marcello', role: 'CTO', focus: 'Arsitektur blockchain & keamanan infrastruktur.' },
  { name: 'Noel Ericson', role: 'Head of Legal', focus: 'Kepatuhan regulasi dan pengelolaan kontrak digital.' },
  { name: 'Abiem Akmal', role: 'Lead Engineer', focus: 'Integrasi API, devrel, dan dokumentasi teknis.' },
]
</script>

<template>
  <section class="glass-panel space-y-6 p-8">
    <div>
      <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">Tim BlockSeal</p>
      <h2 class="mt-2 text-3xl font-semibold text-white">Orang di Balik Produk</h2>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <article v-for="member in members" :key="member.name" class="rounded-2xl border border-white/5 bg-black/40 p-5">
        <h3 class="text-xl font-semibold text-white">{{ member.name }}</h3>
        <p class="text-sm text-brand-blue">{{ member.role }}</p>
        <p class="mt-3 text-sm text-slate-400">{{ member.focus }}</p>
      </article>
    </div>
    <div class="rounded-2xl border border-brand-blue/30 bg-brand-blue/10 p-6 text-sm text-slate-200">
      <p class="font-semibold text-white">Kontak resmi</p>
      <p>Email: blockseal@cihuy.com • Website: blockseal.id • Telegram: @blockseal_cihuy</p>
    </div>
  </section>
</template>


