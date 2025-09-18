'use client';

export default function Input({ label, type = 'text', value, onChange, error }) {
return (
    <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <input
        type={type}
        value={value}
        onChange={onChange}
        className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
        error ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-orange-300'
        }`}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
);
}