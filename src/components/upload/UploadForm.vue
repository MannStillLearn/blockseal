<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const selectedFile = ref(null)
const dragActive = ref(false)
const feedback = ref(null)
const isProcessing = ref(false)

const openPicker = () => {
  fileInput.value?.click()
}

const onFileChange = event => {
  const [file] = event.target.files
  selectedFile.value = file ?? null
  feedback.value = null
}

const handleDrop = event => {
  event.preventDefault()
  dragActive.value = false
  if (event.dataTransfer?.files?.length) {
    selectedFile.value = event.dataTransfer.files[0]
    feedback.value = null
  }
}

const handleDrag = value => event => {
  event.preventDefault()
  dragActive.value = value
}

const randomHash = () => {
  const buffer = window.crypto?.getRandomValues?.(new Uint32Array(8))
  if (!buffer) {
    return Math.random().toString(16).substring(2).repeat(4).slice(0, 64)
  }
  return Array.from(buffer)
    .map(number => number.toString(16).padStart(8, '0'))
    .join('')
    .slice(0, 64)
}

const copyHash = async hash => {
  try {
    await navigator.clipboard.writeText(hash)
    feedback.value = { ...feedback.value, copyStatus: 'Hash tersalin.' }
  } catch (error) {
    feedback.value = { ...feedback.value, copyStatus: 'Gagal menyalin hash.' }
    console.error(error)
  }
}

const uploadFile = async () => {
  if (!selectedFile.value) {
    feedback.value = {
      status: 'error',
      message: 'Pilih file terlebih dahulu sebelum mengunggah.',
    }
    return
  }
  isProcessing.value = true
  feedback.value = null
  await new Promise(resolve => setTimeout(resolve, 1200))

  // simulasi sukses
  const hash = randomHash()
  feedback.value = {
    status: 'success',
    message: `File ${selectedFile.value.name} berhasil diunggah.`,
    hash,
  }
  isProcessing.value = false
}
</script>

<template>
  <section class="page-padding">
    <div class="glass-panel space-y-6 p-8">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">Upload</p>
        <h1 class="mt-2 text-3xl font-semibold text-white">Unggah File ke BlockSeal</h1>
        <p class="mt-2 text-sm text-slate-400">
          Tarik file Anda ke kotak di bawah atau klik untuk memilih dari perangkat.
        </p>
      </div>

      <div
        class="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-brand-blue/40 bg-black/30 px-6 py-10 text-center transition hover:border-brand-blue/70"
        :class="dragActive ? 'bg-brand-blue/10' : ''"
        @dragenter="handleDrag(true)"
        @dragleave="handleDrag(false)"
        @dragover="handleDrag(true)"
        @drop="handleDrop"
        @click="openPicker"
      >
        <div
          class="flex h-16 w-16 items-center justify-center rounded-full border border-brand-blue/40 bg-brand-blue/10 text-brand-blue"
        >
          ⬆️
        </div>
        <div>
          <p class="text-lg font-semibold text-white">Tarik & letakkan file di sini</p>
          <p class="text-sm text-slate-400">atau klik untuk memilih dari penyimpanan laptop</p>
        </div>
        <p class="text-xs text-slate-500">Format yang didukung: PDF, DOCX, JPG, ZIP</p>
        <input
          ref="fileInput"
          class="sr-only"
          type="file"
          @change="onFileChange"
        />
        <p v-if="selectedFile" class="rounded-full bg-white/5 px-4 py-1 text-xs text-slate-300">
          {{ selectedFile.name }}
        </p>
      </div>

      <button
        class="w-full rounded-2xl bg-brand-blue px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        :disabled="isProcessing"
        @click="uploadFile"
      >
        {{ isProcessing ? 'Memproses...' : 'Upload Sekarang' }}
      </button>

      <div v-if="feedback" class="rounded-2xl border border-white/5 bg-black/40 p-4 text-sm">
        <p
          :class="feedback.status === 'success' ? 'text-emerald-400' : 'text-rose-400'"
          class="font-medium"
        >
          {{ feedback.message }}
        </p>
        <div v-if="feedback.status === 'success'" class="mt-3 space-y-3">
          <div class="flex flex-wrap items-center gap-2 rounded-xl bg-white/5 px-3 py-2 font-mono text-xs text-slate-200">
            <span>{{ feedback.hash }}</span>
          </div>
          <button
            class="rounded-xl border border-white/10 px-3 py-2 text-xs text-white transition hover:bg-white/10"
            type="button"
            @click="copyHash(feedback.hash)"
          >
            Salin Hash
          </button>
          <p v-if="feedback.copyStatus" class="text-xs text-slate-400">
            {{ feedback.copyStatus }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


