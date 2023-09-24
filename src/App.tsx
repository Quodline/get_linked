import {Route, Routes} from "react-router-dom";

import Landing from "./pages/Landing.tsx";
import Contact from "./pages/Contact.tsx";
import Register from "./pages/Register.tsx";

function App() {
    return (
        <>
            <div>
                <div className="background">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div className="main-container">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;
