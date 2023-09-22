import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Contact from "./pages/Contact.tsx";
import Register from "./pages/Register.tsx";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
