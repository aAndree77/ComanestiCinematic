'use client'; // Important pentru interactivitate (meniu deschis/închis)
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b-2 border-brand-gold sticky top-0 z-[100]">
      <div className="max-w-[1440px] mx-auto py-3 px-4 md:px-10 flex items-center justify-between">
        
        <div className="flex items-center shrink-0">
          <Link href="/">
            <img 
              src="/logo-cinema.png" 
              alt="Logo" 
              className="h-12 md:h-20 w-auto hover:brightness-110 transition-all" 
            />
          </Link>
        </div>

        <div className="hidden lg:flex gap-8 items-center font-[900] text-xl tracking-tight text-white">
          <Link href="/" className="hover:text-brand-gold transition">PROGRAM</Link>
          <Link href="/oferte" className="hover:text-brand-gold transition">OFERTE</Link>
          <Link href="/4dx" className="hover:text-brand-gold transition italic">4DX</Link>
          <Link href="/vip" className="hover:text-brand-gold transition">VIP</Link>
          <Link href="/about" className="hover:text-brand-gold transition">DESPRE NOI</Link>
        </div>

        <div className="flex items-center gap-4 md:gap-8">

          <div className="hidden sm:flex flex-col items-end leading-none">
            <div className="flex items-center gap-1 text-brand-gold font-[900]">
              <span className="text-sm">📍</span>
              <span className="text-base uppercase">Bacău</span>
            </div>
            <span className="text-[9px] text-zinc-500 font-bold tracking-[0.2em] uppercase">Comănești</span>
          </div>

          <div className="hidden md:flex items-center gap-4 font-[900] text-sm italic">
            <Link href="/" className="text-white hover:text-brand-gold transition border-r border-zinc-800 pr-4 uppercase">
              Log In
            </Link>
            <Link href="/" className="bg-brand-gold text-black px-5 py-2 rounded-sm hover:bg-white transition-colors uppercase">
              Cont Nou
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-gold p-2"
          >
            <div className="space-y-1.5">
              <span className={`block w-7 h-0.5 bg-brand-gold transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-brand-gold transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-brand-gold transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-black ${isOpen ? 'max-h-screen border-b border-brand-gold' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-6 font-[900] text-lg tracking-widest text-center text-white">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-gold uppercase">Program</Link>
          <Link href="/oferte" onClick={() => setIsOpen(false)} className="hover:text-brand-gold uppercase">Oferte</Link>
          <Link href="/4dx" onClick={() => setIsOpen(false)} className="text-brand-gold italic">4DX</Link>
          <Link href="/vip" onClick={() => setIsOpen(false)} className="hover:text-brand-gold uppercase">VIP</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-brand-gold uppercase">Despre Noi</Link>
          
          <div className="flex flex-col gap-4 pt-6">
            <Link href="/" className="text-sm uppercase tracking-widest border border-white/20 py-3 rounded">Log In</Link>
            <Link href="/" className="text-sm uppercase tracking-widest bg-brand-gold text-black py-3 rounded">Cont Nou</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}