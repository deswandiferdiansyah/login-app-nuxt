export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname

  const isProtected = (p: string) =>
    path === p || path.startsWith(p + '/')

  // Middleware ini hanya peduli pada /login, /home, dan /admin
  if (!isProtected('/login') && !isProtected('/home') && !isProtected('/admin')) {
    return
  }

  const session = await useAppSession(event)
  const role = session.data.role

  // Sudah login tapi buka /login lagi -> lempar ke /home
  if (isProtected('/login') && role) {
    return sendRedirect(event, '/home')
  }

  // Halaman /login boleh diakses siapa saja yang belum login
  if (isProtected('/login')) {
    return
  }

  // Belum login tapi coba akses /home atau /admin -> lempar ke /login
  if (!role) {
    return sendRedirect(event, '/login')
  }

  // Sudah login tapi bukan admin, coba akses /admin -> lempar ke /home
  if (isProtected('/admin') && role !== 'admin') {
    return sendRedirect(event, '/home')
  }

  // Selain itu, lanjutkan request seperti biasa
})