# Simple Task Manager API

RESTful API untuk mengelola task (CRUD) dengan validasi input, filter & search, menggunakan Node.js + Express + MongoDB (Mongoose).

---

## Daftar Isi
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Persyaratan](#persyaratan)
- [Instalasi](#instalasi)
- [Environment Variables](#environment-variables)
- [Struktur Project](#struktur-project)
- [Endpoint](#endpoint)
  - [1. Create Task](#1-create-task)
  - [2. Get All Tasks](#2-get-all-tasks)
  - [3. Get Task by ID](#3-get-task-by-id)
  - [4. Update Task](#4-update-task)
  - [5. Delete Task](#5-delete-task)
- [Validasi & Error Handling](#validasi--error-handling)
- [Contoh Penggunaan (cURL)](#contoh-penggunaan-curl)
- [ Lisensi](#lisensi)

---

## Fitur
- Membuat task baru (judul, deskripsi, status, prioritas, tenggat waktu)
- Melihat daftar task dengan filter status & search keyword
- Melihat detail task berdasarkan ID
- Mengupdate task (semua field dapat diubah)
- Menghapus task
- Validasi input lengkap & error handling terpusat
- Timestamp otomatis (`created_at`, `updated_at`)

---

## Tech Stack
- **Runtime**: Node.js (≥ 18)
- **Framework**: Express.js
- **Database**: MongoDB (lokal atau MongoDB Atlas)
- **ODM**: Mongoose
- **Dependency**: dotenv

---

## Persyaratan
- MongoDB berjalan (lokal `mongodb://localhost:27017` atau URI Atlas)
- Node.js ≥ 18 terpasang

---

## Instalasi
1. Clone / salin project
   ```bash
   git clone &lt;url-repo&gt;.git
   cd task-manager
