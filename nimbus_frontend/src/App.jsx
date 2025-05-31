import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskBoard from './pages/TaskBoard';
import ProjectBoard from './pages/ProjectBoard'


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectBoard/>}/>
        <Route path="/tasks" element={<TaskBoard/>}/>
      </Routes>
    </Router>

  );
}

export default App;
