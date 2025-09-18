export default function Card({ title, content, icon, actions }) {
return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2">
    {icon && <div className="text-3xl">{icon}</div>}
    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{content}</p>
    {actions && <div className="mt-2">{actions}</div>}
    </div>
);
}
