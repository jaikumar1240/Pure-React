import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Link } from "react-router-dom";
import Details from "./Details";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
})


import SearchParams from "./SearchParams";
import { useState } from "react";
const App = () => {
    const adoptedPet = useState(null);
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedPetContext.Provider value={adoptedPet}>
                    <header>
                        <Link to='/'>Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/" element={<SearchParams />}></Route>
                        <Route path="/details/:id" element={<Details />}></Route>
                    </Routes>
                </AdoptedPetContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);