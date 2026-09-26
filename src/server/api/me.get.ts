export default defineEventHandler(async (event) => {
  const session = await useAppSession(event)
  return {
    username: session.data.username,
    role: session.data.role
  }
})