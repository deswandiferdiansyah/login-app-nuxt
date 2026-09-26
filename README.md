# Login App

Aplikasi login sederhana menggunakan Nuxt 3, dengan validasi Yup di client dan Zod di server, serta pembatasan akses halaman berbasis role menggunakan server middleware.

**Nama:Deswandi Ferdiansyah** 

## Fitur
- Login dengan session H3
- Validasi client (Yup) dan server (Zod)
- Role-based access control (admin vs employee) via server middleware

## Akun uji
| Username | Password | Role |
|---|---|---|
| admin | admin | admin |
| employee | employee | employee |

## Menjalankan proyek
\`\`\`bash
npm install
npm run dev
\`\`\`
Buka http://localhost:3000