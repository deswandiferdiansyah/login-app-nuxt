import type { H3Event } from 'h3'

export function useAppSession(event: H3Event) {
  return useSession<{ username?: string; role?: string }>(event, {
    password: useRuntimeConfig().sessionSecret
  })
}