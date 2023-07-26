import Home from "./pages/home/Home";
import CarList from "./pages/car-list/index";
import ReactDOM from "react-dom/client";
// import { Button, SwipeableDrawer } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarDetail from "./pages/cardetails/car-detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/car-list" element={<CarList />} /> 
        <Route path="/car-detail" element={<CarDetail />} /> 
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
