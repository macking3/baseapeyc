import { Home, Mint, Dashboard } from './pages'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/owner-dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
