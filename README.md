# Shree Balaji Life Line Hospital

A modern, responsive hospital website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Supabase**, and **shadcn/ui**.

## Features

### Patient Website

- Responsive design
- Home, About, Departments, Doctors, Facilities, Gallery, Contact
- Online appointment booking
- Emergency contact section
- Working hours
- Privacy Policy & Terms pages
- SEO-ready (robots.txt, sitemap.xml, metadata)

### Admin Panel

- Secure admin login using Supabase Authentication
- Dashboard
- View appointment requests
- Update appointment status
- Manage doctors
- Manage departments
- Real-time appointment updates using Supabase Realtime

### Backend

- Supabase Database
- Supabase Authentication
- Supabase Edge Functions
- Email confirmation using Resend

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Query
- Wouter
- Framer Motion
- Radix UI

### Backend

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Edge Functions
- Resend Email API

### Deployment

- Vercel

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Anshuman-Tiwari-2002/shree-balaji-hospital-standalone.git

cd shree-balaji-hospital-standalone
```

---

### Install dependencies

```bash
pnpm install
```

or

```bash
npm install
```

---

### Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

### Start Development Server

```bash
pnpm dev
```

The application will be available at:

```
http://localhost:5173
```

---

### Production Build

```bash
pnpm build
```

---

### Preview Production Build

```bash
pnpm preview
```

---

## Project Structure

```
src/
├── admin/
│   ├── components/
│   ├── pages/
│   ├── AdminLogin.tsx
│   ├── Dashboard.tsx
│   └── ProtectedRoute.tsx
│
├── components/
├── data/
├── hooks/
├── lib/
├── pages/
├── App.tsx
└── main.tsx

public/
├── robots.txt
├── sitemap.xml
└── favicon.svg

supabase/
└── functions/
    └── send-confirmation-email/
```

---

## Deployment

The application is designed to be deployed on **Vercel**.

Required environment variables:

```env
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

The Supabase Edge Function requires:

```env
RESEND_API_KEY
```

---

## Features Implemented

- Responsive UI
- Appointment Booking
- Admin Dashboard
- Authentication
- Real-time Appointment Updates
- Email Confirmation
- SEO Metadata
- Sitemap
- Robots.txt
- Vercel Deployment

---

### License

This repository contains the source code for the Shree Balaji Life Line Hospital website.

Unauthorized redistribution or commercial use without permission is prohibited.
