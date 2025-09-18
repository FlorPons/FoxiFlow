import { useState } from 'react';

export default function Navbar({ onNavigate }) {
const [active, setActive] = useState('home');

const navItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'calendar', label: 'Calendario', icon: '📅' },
    { id: 'foxi', label: 'Foxi', icon: '🦊' },
    { id: 'profile', label: 'Perfil', icon: '👤' },
];

return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t flex justify-around py-2 shadow-md">
    {navItems.map((item) => (
        <button
        key={item.id}
        onClick={() => {
            setActive(item.id);
            onNavigate(item.id);
        }}
        className={`flex flex-col items-center text-sm ${
            active === item.id ? 'text-orange-500 font-bold' : 'text-gray-500'
        }`}
        >
        <span className="text-xl">{item.icon}</span>
        {item.label}
        </button>
    ))}
    </nav>
);
}
