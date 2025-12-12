<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navOpen = ref(false)
const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Upload', to: '/upload' },
  { label: 'Download', to: '/cots' },
  { label: 'Verify', to: '/verify' },
  { label: 'History', to: '/history' },
  { label: 'About', to: '/about' },
]

const toggleMenu = () => {
  navOpen.value = !navOpen.value
}

watch(
  () => route.path,
  () => {
    navOpen.value = false
  }
)
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl"
  >
    <div class="page-padding flex h-20 items-center justify-between">
      <RouterLink to="/" class="text-2xl font-semibold tracking-wide text-white">
        <span class="text-brand-blue">Block</span>Seal
      </RouterLink>

      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="transition hover:text-white"
          :class="route.path === link.to ? 'text-brand-blue' : ''"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/upload"
          class="rounded-full border border-brand-blue/30 bg-brand-blue/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue/40"
        >
          Mulai Unggah
        </RouterLink>
      </nav>

      <button
        class="text-white md:hidden"
        type="button"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        <span v-if="!navOpen" class="text-2xl">☰</span>
        <span v-else class="text-2xl">✕</span>
      </button>
    </div>

    <div
      v-if="navOpen"
      class="border-t border-white/10 bg-slate-900/95 px-6 py-4 text-sm font-medium text-slate-200 md:hidden"
    >
      <div class="flex flex-col gap-3">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-xl px-3 py-2 transition hover:bg-white/5"
          :class="route.path === link.to ? 'text-brand-blue' : ''"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink
          to="/upload"
          class="rounded-xl bg-brand-blue/20 px-3 py-2 text-brand-blue transition hover:bg-brand-blue/30"
        >
          Mulai Unggah
        </RouterLink>
      </div>
    </div>
  </header>
</template>



