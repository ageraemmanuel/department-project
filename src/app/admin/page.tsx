'use client'
import AdminDashboard from "./AdminComponent";
import { redirect, useSearchParams } from "next/navigation";

export default function AdminLayout() {
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref')

  if (!ref || ref !== 'admin') redirect("/login")

  return (

    <div>
      <AdminDashboard />
    </div>
  );
}
