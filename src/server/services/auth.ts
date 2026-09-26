import { z } from 'zod'
import { getUser } from '../repositories/user'

const loginSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(4, { message: 'Invalid username' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(4, { message: 'Password must be at least 4 characters' })
})

export async function login(body: unknown) {
  const parsed = loginSchema.safeParse(body)

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: parsed.error.issues[0]?.message ?? 'Data tidak valid'
    })
  }

  const user = await getUser(parsed.data.username, parsed.data.password)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Username atau password salah'
    })
  }

  return user
}