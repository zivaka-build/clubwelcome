import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
