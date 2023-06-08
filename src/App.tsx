import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop, Layout } from "@src/components";
import { About, Home } from "@src/pages";
import "swiper/css";
import "swiper/css/pagination";
import "./custom-swiper.css";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about-us" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
