'use client';

import { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    if (!email || !password) {
        setError('Por favor completá todos los campos');
        return;
    }



    
    console.log('Login pendiente de implementación');
    };




    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <Input
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error && !email ? 'Campo obligatorio' : ''}
        />

        <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error && !password ? 'Campo obligatorio' : ''}
        />

        {error && email && password && (
            <p className="text-sm text-red-500">{error}</p>
        )}

        <Button label="Iniciar sesión" variant="primary" onClick={handleSubmit} />

        <div className="text-center text-sm text-gray-600 mt-2">
            ¿No tenés cuenta? <a href="/register" className="text-orange-500 font-semibold">Registrate</a>
        </div>
    </form>
    );
}
