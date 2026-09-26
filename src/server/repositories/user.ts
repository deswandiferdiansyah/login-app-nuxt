type User = {
  username: string
  password: string
  role: 'admin' | 'employee'
}

const users: User[] = [
  { username: 'admin', password: 'admin', role: 'admin' },
  { username: 'employee', password: 'employee', role: 'employee' }
]

export async function getUser(username: string, password: string) {
  const found = users.find(
    u => u.username === username && u.password === password
  )
  return found ? { username: found.username, role: found.role } : null
}