import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import { Container } from "react-bootstrap";
import Movieslist from "./components/Movieslist/Movieslist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="font color-body">
      <Navbar />
      <Container>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Movieslist />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
