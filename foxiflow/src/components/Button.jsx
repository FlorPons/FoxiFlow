'use client';

export default function Button({
label = 'Aceptar',
onClick,
variant = 'primary',
disabled = false,
size = 'md',
}) {
const baseStyles = 'rounded-md font-semibold transition-colors duration-200';
const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};
const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
};

const styles = `${baseStyles} ${sizeStyles[size]} ${
    disabled ? variantStyles.disabled : variantStyles[variant]
}`;

return (
    <button className={styles} onClick={onClick} disabled={disabled}>
    {label}
    </button>
);
}
