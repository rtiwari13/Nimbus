export function BoardCard({ title, image, isTemplate }) {
  return (
    <div className="w-48 h-28 bg-yellow-700 bg-center rounded-lg p-2 text-white flex flex-col justify-between" style={{ backgroundImage: `url(${image})` }}>
      <span className="text-sm font-semibold">{title}</span>
      {isTemplate && (
        <span className="text-xs bg-blue-500 px-1 rounded self-end">TEMPLATE</span>
      )}
    </div>
  );
}
