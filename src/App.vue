<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-brand-dark via-slate-900 to-black text-slate-100"
  >
    <AppNavbar />
    <main class="pt-24 pb-16 space-y-16">
      <RouterView />
    </main>
  </div>
</template>
