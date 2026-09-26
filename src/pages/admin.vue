<script setup lang="ts">
const headers = useRequestHeaders(['cookie'])
const { data: me } = await useFetch('/api/me', { headers })
</script>

<template>
  <div class="min-h-screen p-6 space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Admin Page</h1>
      <NuxtLink to="/home" external>
        <UButton color="gray" variant="soft">Kembali ke Home</UButton>
      </NuxtLink>
    </div>

    <UCard>
      <p>Halaman ini hanya bisa diakses oleh role <strong>admin</strong>.</p>
      <p class="mt-2">Login sebagai: <strong>{{ me?.username }}</strong> ({{ me?.role }})</p>
    </UCard>
  </div>
</template>