// app/dashboard/page.tsx
'use client'

import { useName } from '../context/NameContext'

export default function Dashboard() {
  const { name } = useName();
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {name}!</p>
    </div>
  )
}