import {BrowserRouter, Routes, Route} from "react-router-dom";
import Fish from "./pages/Fish.tsx";
import Lessons from "./pages/Lessons.tsx";

export function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="fish" element={<Fish />} />
                    <Route path="lessons" element={<Lessons />} />
                </Routes>
            </BrowserRouter>
    )

}

