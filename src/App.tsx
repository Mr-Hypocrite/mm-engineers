import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop, Layout } from "@src/components";
import { Home } from "@src/pages";

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
