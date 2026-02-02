import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero.tsx";
import "./styles/global.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
        </Routes>
    )
}

export default App;