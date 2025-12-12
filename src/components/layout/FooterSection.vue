<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="page-padding mt-16 rounded-3xl bg-slate-900/80 border border-white/5 py-10">
    <div class="flex flex-col gap-8 md:flex-row md:justify-between">
      <div class="max-w-md space-y-3">
        <p class="text-2xl font-semibold text-white">
          <span class="text-brand-blue">Block</span>Seal
        </p>
        <p class="text-sm text-slate-400">
          Infrastruktur penyimpanan file terdistribusi yang memanfaatkan bukti kriptografi
          sehingga setiap dokumen yang dibagikan tercatat rapi dan mudah diverifikasi.
        </p>
      </div>
      <div class="grid flex-1 gap-6 text-sm text-slate-300 sm:grid-cols-2">
        <div>
          <p class="mb-3 text-xs uppercase tracking-wide text-slate-500">Navigasi</p>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="hover:text-white">Home</RouterLink></li>
            <li><RouterLink to="/upload" class="hover:text-white">Upload</RouterLink></li>
            <li><RouterLink to="/cots" class="hover:text-white">Cots</RouterLink></li>
            <li><RouterLink to="/verify" class="hover:text-white">Verify</RouterLink></li>
            <li><RouterLink to="/history" class="hover:text-white">History</RouterLink></li>
          </ul>
        </div>
        <div>
          <p class="mb-3 text-xs uppercase tracking-wide text-slate-500">Kontak</p>
          <ul class="space-y-2">
            <li>Email: ainunnasichin@gmail.com</li>
            <li>Telegram: @blockseal_cihuy</li>
            <li>Github: github.com/blockseal</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="mt-8 text-center text-xs text-slate-500">
      © {{ currentYear }} BlockSeal. All rights reserved.
    </p>
  </footer>
</template>

