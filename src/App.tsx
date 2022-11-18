import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./components/moviesPage/MoviesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
