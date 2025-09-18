'use client';

import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import foxiWelcome from '@/assets/saludo.png';
import AuthLayout from '@/components/layouts/AuthLayout';

export default function LoginPage() {
    return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Layout solo en desktop */}
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:w-1/2 bg-[#1b3a2f] text-white p-8">
            <Image
            src={foxiWelcome}
            alt="Foxi dando la bienvenida"
            width={240}
            height={240}
            className="mb-4 object-cover"
            priority
            />
            <h1 className="text-3xl font-bold text-orange-400 text-center">Bienvenid🦊 a FoxiFlow</h1>
            <p className="text-base text-gray-200 text-center mt-2">
                Tu espacio para planificar, coordinar y organizar en comunidad
            </p>
        </div>

      {/* Contenido principal */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 bg-gray-50">
            {/* Bloque superior solo en mobile */}
            <div className="flex flex-col items-center text-center mb-6 md:hidden">
                <Image
                src={foxiWelcome}
                alt="Foxi dando la bienvenida"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full"
                priority
                />
                <h1 className="text-2xl font-bold text-orange-500">Bienvenid🦊 a FoxiFlow</h1>
                <p className="text-sm text-gray-600">
                    Tu espacio para planificar, coordinar y organizar en comunidad
                </p>
            </div>

            <div className="w-full max-w-md">
                <LoginForm onLogin={(user) => console.log('Login exitoso:', user)} />
            </div>
        </div>
    </div>
    );
}
