import Sidebar from '../components/projectboard/Sidebar';
import Header from '../components/projectboard/Header';
import { BoardCard } from '../components/projectboard/BoardCard';

const templateBoards = [
  { title: "Basic Board", image: "/images/basic.jpg", isTemplate: true },
  { title: "Kanban Template", image: "/images/kanban.jpg", isTemplate: true },
  { title: "Daily Task Management", image: "/images/daily.jpg", isTemplate: true },
];

const userBoards = [
  { title: "My Nimbus board", image: "/images/gradient.jpg", isTemplate: false },
  { title: "Remote Team Hub", image: "/images/train.jpg", isTemplate: false },
];

function ProjectBoard() {
  return (
    <div className="flex bg-[#1d2125] text-white min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-lg font-bold mb-2">Most popular templates</h2>
          <div className="flex gap-4 mb-6">
            {templateBoards.map((board, idx) => (
              <BoardCard key={idx} {...board} />
            ))}
          </div>

          <h2 className="text-lg font-bold mb-2">Your boards</h2>
          <div className="flex gap-4">
            {userBoards.map((board, idx) => (
              <BoardCard key={idx} {...board} />
            ))}
            <div className="w-48 h-28 bg-[#2c2f34] rounded-lg flex items-center justify-center cursor-pointer">
              + Create new board
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBoard;
