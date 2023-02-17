import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Details from "./Details";

import SearchParams from "./SearchParams";
const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Link to='/'>Adopt Me!</Link>
            </header>
            <Routes>
                <Route path="/" element={<SearchParams />}></Route>
                <Route path="/details/:id" element={<Details />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);