import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Link } from "react-router-dom";
import Details from "./Details";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
})

import SearchParams from "./SearchParams";
const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>

                <header>
                    <Link to='/'>Adopt Me!</Link>
                </header>
                <Routes>
                    <Route path="/" element={<SearchParams />}></Route>
                    <Route path="/details/:id" element={<Details />}></Route>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);