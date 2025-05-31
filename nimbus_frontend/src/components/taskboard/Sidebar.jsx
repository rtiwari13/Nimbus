const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-gray-300 w-60 p-4 h-screen border-r border-gray-700">
      <h2 className="text-xl font-bold mb-4">zrx-workspace</h2>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer">Inbox</li>
        <li className="hover:text-white cursor-pointer">Projects</li>
        <li className="hover:text-white cursor-pointer">Work Items</li>
        <li className="hover:text-white cursor-pointer">Cycles</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
