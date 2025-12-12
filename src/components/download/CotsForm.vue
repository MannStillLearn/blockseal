<script setup>
import { ref } from 'vue'

const inputType = ref('hash') // 'hash' or 'seedphrase'
const hashInput = ref('')
const seedphraseInput = ref('')
const feedback = ref(null)
const isProcessing = ref(false)
const downloadedFile = ref(null)

const switchInputType = type => {
  inputType.value = type
  hashInput.value = ''
  seedphraseInput.value = ''
  feedback.value = null
}

const downloadFile = async () => {
  const input = inputType.value === 'hash' ? hashInput.value.trim() : seedphraseInput.value.trim()
  
  if (!input) {
    feedback.value = {
      status: 'error',
      message: inputType.value === 'hash' 
        ? 'Masukkan code hash terlebih dahulu.' 
        : 'Masukkan seedphrase terlebih dahulu.',
    }
    return
  }

  isProcessing.value = true
  feedback.value = null
  await new Promise(resolve => setTimeout(resolve, 1200))

  // simulasi sukses download
  downloadedFile.value = {
    name: 'document.pdf',
    size: '2.4 MB',
    hash: inputType.value === 'hash' ? input : 'a1b2c3d4e5f6...',
  }
  
  feedback.value = {
    status: 'success',
    message: `File berhasil ditemukan dan siap diunduh.`,
    file: downloadedFile.value,
  }
  isProcessing.value = false
}

const triggerDownload = () => {
  // Simulasi download file
  const link = document.createElement('a')
  link.href = '#' // In production, this would be the actual file URL
  link.download = downloadedFile.value.name
  link.click()
  
  feedback.value = {
    ...feedback.value,
    downloadStatus: 'File sedang diunduh...',
  }
}
</script>

<template>
  <section class="page-padding">
    <div class="glass-panel space-y-6 p-8">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">Download</p>
        <h1 class="mt-2 text-3xl font-semibold text-white">Unduh File dari BlockSeal</h1>
        <p class="mt-2 text-sm text-slate-400">
          Masukkan code hash atau seedphrase untuk mengunduh file yang telah diunggah.
        </p>
      </div>

      <!-- Input Type Selector -->
      <div class="flex gap-2 rounded-2xl border border-white/10 bg-black/30 p-1">
        <button
          type="button"
          class="flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition"
          :class="inputType === 'hash' 
            ? 'bg-brand-blue text-black' 
            : 'text-slate-300 hover:text-white'"
          @click="switchInputType('hash')"
        >
          Code Hash
        </button>
        <button
          type="button"
          class="flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition"
          :class="inputType === 'seedphrase' 
            ? 'bg-brand-blue text-black' 
            : 'text-slate-300 hover:text-white'"
          @click="switchInputType('seedphrase')"
        >
          Seedphrase
        </button>
      </div>

      <!-- Input Field -->
      <div class="space-y-4">
        <div
          v-if="inputType === 'hash'"
          class="rounded-3xl border border-brand-blue/40 bg-black/30 px-6 py-6 transition hover:border-brand-blue/70"
        >
          <label class="mb-2 block text-sm font-medium text-slate-300">
            Code Hash
          </label>
          <input
            v-model="hashInput"
            type="text"
            placeholder="Masukkan code hash (64 karakter)"
            class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-blue/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            maxlength="64"
          />
          <p class="mt-2 text-xs text-slate-500">
            Code hash adalah identifier unik untuk file yang diunggah
          </p>
        </div>

        <div
          v-else
          class="rounded-3xl border border-brand-blue/40 bg-black/30 px-6 py-6 transition hover:border-brand-blue/70"
        >
          <label class="mb-2 block text-sm font-medium text-slate-300">
            Seedphrase
          </label>
          <textarea
            v-model="seedphraseInput"
            type="text"
            placeholder="Masukkan seedphrase (12-24 kata)"
            rows="3"
            class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-blue/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 resize-none"
          ></textarea>
          <p class="mt-2 text-xs text-slate-500">
            Seedphrase adalah kunci recovery untuk mengakses file
          </p>
        </div>
      </div>

      <button
        class="w-full rounded-2xl bg-brand-blue px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        :disabled="isProcessing"
        @click="downloadFile"
      >
        {{ isProcessing ? 'Mencari file...' : 'Cari & Unduh File' }}
      </button>

      <div v-if="feedback" class="rounded-2xl border border-white/5 bg-black/40 p-4 text-sm">
        <p
          :class="feedback.status === 'success' ? 'text-emerald-400' : 'text-rose-400'"
          class="font-medium"
        >
          {{ feedback.message }}
        </p>
        <div v-if="feedback.status === 'success' && feedback.file" class="mt-3 space-y-3">
          <div class="rounded-xl bg-white/5 p-4 space-y-2">
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-xl"
              >
                📄
              </div>
              <div class="flex-1">
                <p class="font-semibold text-white">{{ feedback.file.name }}</p>
                <p class="text-xs text-slate-400">{{ feedback.file.size }}</p>
              </div>
            </div>
            <div v-if="inputType === 'hash'" class="flex flex-wrap items-center gap-2 rounded-xl bg-white/5 px-3 py-2 font-mono text-xs text-slate-200">
              <span>{{ hashInput }}</span>
            </div>
          </div>
          <button
            class="w-full rounded-xl bg-brand-blue px-4 py-3 text-sm font-semibold text-black transition hover:bg-sky-400"
            type="button"
            @click="triggerDownload"
          >
            Unduh File Sekarang
          </button>
          <p v-if="feedback.downloadStatus" class="text-xs text-slate-400">
            {{ feedback.downloadStatus }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

