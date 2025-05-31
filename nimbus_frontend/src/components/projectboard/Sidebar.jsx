export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1d2125] text-white p-4 h-screen">
      <div className="text-lg font-semibold mb-6">Workspaces</div>
      <div className="mb-2 text-green-400 font-bold">🟩 Nimbus Workspace</div>
      <ul className="space-y-2">
        <li className="bg-[#2c2f34] px-4 py-2 rounded text-white">Boards</li>
        <li className="hover:bg-[#2c2f34] px-4 py-2 rounded">Members</li>
        <li className="hover:bg-[#2c2f34] px-4 py-2 rounded">Settings</li>
      </ul>
      <div className="mt-10 bg-[#2c2f34] p-4 rounded text-sm">
        <p className="mb-2">Upgrade this Workspace</p>
        <button className="text-blue-400 underline">Upgrade</button>
      </div>
    </div>
  );
}
