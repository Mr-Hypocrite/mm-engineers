import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop, Layout } from "@src/components";
import { Home } from "@src/pages";
import "swiper/css";
import "swiper/css/pagination";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
