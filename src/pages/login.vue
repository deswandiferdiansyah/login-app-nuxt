<script setup lang="ts">
import { object, string } from 'yup'

const schema = object({
  username: string()
    .min(4, 'Must be at least 4 characters')
    .required('Required'),
  password: string()
    .min(4, 'Must be at least 4 characters')
    .required('Required')
})

const state = reactive({
  username: '',
  password: ''
})

const errorMessage = ref('')
const loading = ref(false)

async function onSubmit() {
  errorMessage.value = ''
  loading.value = true
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: state
    })
    await navigateTo('/home', { external: true })
} catch (err) {
  const error = err as { data?: { statusMessage?: string } }
  errorMessage.value = error?.data?.statusMessage || 'Login gagal'
} finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
    <UCard class="w-full max-w-sm">
      <template #header>
        <h1 class="text-xl font-semibold">Login</h1>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Username" name="username">
          <UInput v-model="state.username" placeholder="admin / employee" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UAlert
          v-if="errorMessage"
          color="red"
          variant="soft"
          :title="errorMessage"
        />

        <UButton type="submit" block :loading="loading">
          Login
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>