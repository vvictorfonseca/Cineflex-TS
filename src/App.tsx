import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./components/moviesPage/MoviesPage";
import SessionsPage from "./components/sessionsPage/SessionsPage";
import SeatsPage from "./components/seatsPage/SeatsPage";
import SucessPage from "./components/sucessPage/SucessPage";

import { SucessProvider } from "./contexts/sucessContext";

export default function App() {
  return (
    <BrowserRouter>
      <SucessProvider>
        <Routes>
          <Route path="/" element={ <MoviesPage /> } />
          <Route path="/sessoes/:id" element={ <SessionsPage /> } />
          <Route path="/assentos/:id" element={ <SeatsPage /> } />
          <Route path="/sucesso" element={ <SucessPage /> } />
        </Routes>
      </SucessProvider>
    </BrowserRouter>
  )
}
