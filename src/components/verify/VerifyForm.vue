<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const selectedFile = ref(null)
const dragActive = ref(false)
const result = ref(null)
const processing = ref(false)

const openPicker = () => fileInput.value?.click()

const onFileChange = event => {
  const [file] = event.target.files
  selectedFile.value = file ?? null
  result.value = null
}

const handleDrop = event => {
  event.preventDefault()
  dragActive.value = false
  if (event.dataTransfer?.files?.length) {
    selectedFile.value = event.dataTransfer.files[0]
    result.value = null
  }
}

const handleDrag = value => event => {
  event.preventDefault()
  dragActive.value = value
}

const buildDetail = fileName => ({
  uploader: 'Siti Rahma (Legal Lead)',
  viewer: 'Budi Santoso (Auditor)',
  uploadedAt: '27 Nov 2025, 10:22 WIB',
  lastViewed: '27 Nov 2025, 10:25 WIB',
  filename: fileName,
})

const verifyFile = async () => {
  if (!selectedFile.value) {
    result.value = { status: 'error', message: 'Masukkan file yang ingin diverifikasi.' }
    return
  }
  processing.value = true
  result.value = null
  await new Promise(resolve => setTimeout(resolve, 1000))

  const isValid = selectedFile.value.size % 2 === 0
  result.value = isValid
    ? {
        status: 'success',
        message: 'File berhasil diverifikasi dan cocok dengan catatan blockchain.',
        detail: buildDetail(selectedFile.value.name),
      }
    : {
        status: 'error',
        message:
          'Hash file tidak ditemukan atau telah dimodifikasi. Silakan cek kembali sumber file Anda.',
      }
  processing.value = false
}
</script>

<template>
  <section class="page-padding">
    <div class="glass-panel space-y-6 p-8">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-brand-blue">Verify</p>
        <h1 class="mt-2 text-3xl font-semibold text-white">Verifikasi File Blockchain</h1>
        <p class="mt-2 text-sm text-slate-400">
          Cocokkan hash file Anda dengan catatan BlockSeal dan lihat siapa saja yang pernah
          mengaksesnya.
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
          🔍
        </div>
        <div>
          <p class="text-lg font-semibold text-white">Tarik file ke sini untuk diverifikasi</p>
          <p class="text-sm text-slate-400">atau klik untuk membuka penyimpanan laptop</p>
        </div>
        <input ref="fileInput" class="sr-only" type="file" @change="onFileChange" />
        <p v-if="selectedFile" class="rounded-full bg-white/5 px-4 py-1 text-xs text-slate-300">
          {{ selectedFile.name }}
        </p>
      </div>

      <button
        class="w-full rounded-2xl bg-brand-blue px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        :disabled="processing"
        @click="verifyFile"
      >
        {{ processing ? 'Memverifikasi...' : 'Verify File' }}
      </button>

      <div v-if="result" class="rounded-2xl border border-white/5 bg-black/40 p-4 text-sm">
        <p
          class="font-semibold"
          :class="result.status === 'success' ? 'text-emerald-400' : 'text-rose-400'"
        >
          {{ result.message }}
        </p>
        <div v-if="result.detail" class="mt-4 grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200 sm:grid-cols-2">
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">Nama File</p>
            <p class="font-medium text-white">{{ result.detail.filename }}</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">Diunggah Oleh</p>
            <p>{{ result.detail.uploader }}</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">Terakhir Dilihat</p>
            <p>{{ result.detail.viewer }}</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">Waktu</p>
            <p>{{ result.detail.uploadedAt }} • {{ result.detail.lastViewed }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



