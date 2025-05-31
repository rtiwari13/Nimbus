

import Sidebar from '../components/taskboard/Sidebar';
import Board from '../components/taskboard/Board';

function TaskBoard() {
  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Board />
      </main>
    </div>
  );
}

export default TaskBoard ;
