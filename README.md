# Laporan COTS

## 1. File Baru
- `src/views/CotsView.vue`
- `src/components/download/CotsForm.vue`

## 2. File yang Berubah
- `src/assets/main.css`
- `src/components/about/AboutMission.vue`
- `src/components/about/AboutTeam.vue`
- `src/components/common/ImageTemplate.vue`
- `src/components/history/HistoryList.vue`
- `src/components/home/FeaturesGrid.vue`
- `src/components/home/HeroSection.vue`
- `src/components/home/HowItWorks.vue`
- `src/components/home/StatsStrip.vue`
- `src/components/home/WhyChooseUs.vue`
- `src/components/layout/AppNavbar.vue`

## 3. Route Halaman Baru
Route ditambahkan pada `src/router/index.js`:

```js
{
  path: '/cots',
  name: 'cots',
  component: () => import('@/views/CotsView.vue'),
}

http://localhost:5173/cots


