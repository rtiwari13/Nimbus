export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#1d2125] p-4 text-white">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#2c2f34] px-4 py-2 rounded w-1/2"
      />
      <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Create
      </button>
    </div>
  );
}
