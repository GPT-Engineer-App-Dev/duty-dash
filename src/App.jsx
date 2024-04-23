import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TodoPage from './pages/TodoPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;