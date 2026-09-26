<script setup lang="ts">
const headers = useRequestHeaders(['cookie'])
const { data: me } = await useFetch('/api/me', { headers })

async function logout() {
  await $fetch('/api/logout', { method: 'POST' })
  await navigateTo('/login', { external: true })
}
</script>

<template>
  <div class="min-h-screen p-6 space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Home</h1>
      <UButton color="gray" variant="soft" @click="logout">
        Logout
      </UButton>
    </div>

    <UCard>
      <p>Halo, <strong>{{ me?.username }}</strong></p>
      <p>Role: <strong>{{ me?.role }}</strong></p>
    </UCard>

    <NuxtLink
      v-if="me?.role === 'admin'"
      to="/admin"
      external
      class="inline-block"
    >
      <UButton>Buka Admin Page</UButton>
    </NuxtLink>
  </div>
</template>