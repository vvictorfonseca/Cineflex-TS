import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./components/moviesPage/MoviesPage";
import SessionsPage from "./components/sessionsPage/SessionsPage";
import SeatsPage from "./components/seatsPage/SeatsPage";

import { MovieProvider } from "./contexts/movieContext";

export default function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route path="/" element={ <MoviesPage /> } />
          <Route path="/sessoes/:id" element={ <SessionsPage /> } />
          <Route path="/assentos/:id" element={<SeatsPage /> } />
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  )
}
