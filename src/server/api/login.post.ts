import { login } from '../services/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const user = await login(body)

  const session = await useAppSession(event)
  await session.update(user)

  return { ok: true, role: user.role }
})