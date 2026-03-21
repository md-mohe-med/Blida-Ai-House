"use client";


import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + '/');
  
  return (
    <Link href={href} className={`relative text-slate-600 hover:text-cyan-600 transition-colors font-bold tracking-tight group py-2 ${isActive ? 'text-cyan-600' : ''}`}>
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-600 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Link>
  );
}

export default function Header() {
  return (
<header className="bg-white text-black p-4 flex justify-between items-center border-b border-gray-200 sticky top-0 w-full z-50">
  <h2 className="text-3xl font-bold">Blida1 Ai House</h2>
  <nav>
    <ul className="flex items-center gap-9">
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/pages/About">About</NavLink></li>
      <li><NavLink href="/pages/Programs">Programs</NavLink></li>
      <li><NavLink href="/pages/Events">Events</NavLink></li>
      <li><NavLink href="/pages/Projects">Projects</NavLink></li>
      <li><NavLink href="/pages/Ethics">Ethics</NavLink></li>
      <li><NavLink href="/pages/Team">Team</NavLink></li>
      <li><NavLink href="/pages/Contact">Contact</NavLink></li>
    </ul>
  </nav>
  <ul className='flex items-center gap-6'>
    <i className="fa-solid fa-envelope bg-cyan-600 text-white p-2 rounded-full"></i>
    <i className="fa-solid fa-phone bg-cyan-600 text-white p-2 rounded-full"></i>
    <i className="fa-solid fa-location-dot bg-cyan-600 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center"></i>
  </ul>
</header>
  );
}

