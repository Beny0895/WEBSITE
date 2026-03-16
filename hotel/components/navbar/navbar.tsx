"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/beny.logo.png"
            width={120}
            height={40}
            alt="logo"
            className="object-contain"/>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase font-medium">
          <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/">Home</Link></li>
          <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/about">About</Link></li>
          <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/rooms">Rooms</Link></li>
          <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/contact">Contact</Link></li>
          <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/myreservation">My Reservation</Link></li>
          <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/admin/dashboard">Dashboard</Link></li>
          <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/admin/manageroom">Manage Room</Link></li>
        </ul>
        {/* Desktop Sign In */}
        <Link href="/login" className="hidden md:block bg-orange-400 hover:bg-orange-500 hover:text-black text-white px-5 py-2 rounded-md text-sm">
          Sign In
        </Link>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
        {/* Mobile Menu */}
        {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm uppercase font-medium ">
            <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/">Home</Link></li>
            <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/about">About</Link></li>
            <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/rooms">Rooms</Link></li>
            <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/contact">Contact</Link></li>
            <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/myreservation">My Reservation</Link></li>
            <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/admin/dashboard">Dashboard</Link></li>
            <li className="hover:bg-orange-400 hover:text-white p-1 rounded-md"><Link href="/admin/manageroom">Manage Room</Link></li>
             <li>
              <Link href="/login" className="bg-orange-400 hover:bg-orange-500 hover:text-black text-white px-5 py-2 rounded-md">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )} 
    </div>
  );
}
