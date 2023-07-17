import Home from "./pages/home/Home";
import CarList from "./pages/car-list/index";
import ReactDOM from "react-dom/client";
// import { Button, SwipeableDrawer } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/car-list" element={<CarList />} /> 
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
