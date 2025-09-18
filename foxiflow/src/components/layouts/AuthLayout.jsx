'use client';

import Image from 'next/image';
import foxiWelcome from '@/assets/saludo.png';

export default function AuthLayout({ children, title, subtitle }) {
    return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Franja lateral  */}
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:w-1/2 bg-[#1b3a2f] text-white p-8 animate-fade-slide">
        <Image
            src={foxiWelcome}
            alt="Foxi dando la bienvenida"
            width={240}
            height={240}
            className="mb-4 object-cover"
            priority
        />
        <h1 className="text-3xl font-bold text-orange-400 text-center">{title}</h1>
        <p className="text-base text-gray-200 text-center mt-2">{subtitle}</p>
        </div>

      {/* Contenido dinámico */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 bg-gray-50">
            <div className="w-full max-w-md">{children}</div>
        </div>
    </div>
    );
}
