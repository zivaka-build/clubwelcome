import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PreLaunchPage from "./Pages/PreLaunchPage/PreLaunchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/announcement" />} />
        <Route path='/announcement' element={<PreLaunchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
