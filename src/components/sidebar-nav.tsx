"use client"

import Link from "next/link"
import { Home, Users, User } from "lucide-react"
import { SignOutButton, useUser } from "@clerk/nextjs"

interface SidebarNavProps {
  username: any
  isOpen: boolean
  onClose: () => void
}

export default function SidebarNav({ username, isOpen, onClose }: SidebarNavProps) {

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white w-64 max-w-[80%] h-full shadow-lg flex flex-col p-4">
        <div className="h-16 w-16 rounded-full bg-[#528F04] mx-auto mb-6 mt-4">{/* Logo will go here */}</div>

        <nav className="space-y-4">
          <Link href="/" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md" onClick={onClose}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link href="/users" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md" onClick={onClose}>
            <Users className="h-5 w-5" />
            <span>Users</span>
          </Link>
          {/* show full name */}
          <div className="flex items-center gap-3 p-2 rounded-md">
            <User className="h-5 w-5" />
            <Link href="/user-profile" onClick={onClose}> {/* Add onClick to close sidebar */}
            <span>{username}</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}