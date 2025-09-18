'use client';

import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import foxiWelcome from '@/assets/saludo.png'; 

export default function LoginPage() {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="flex flex-col items-center text-center mb-6">
        <Image
            src={foxiWelcome}
            alt="Foxi dando la bienvenida"
            className="w-24 h-24 rounded-full"
        />
        <h1 className="text-2xl font-bold text-orange-500">Bienvenida a FoxiFlow</h1>
        <p className="text-sm text-gray-600">Tu espacio para planificar, coordinar y organizar en comunidad</p>
        </div>

        <LoginForm onLogin={(user) => console.log('Login exitoso:', user)} />
    </div>
    );
}
