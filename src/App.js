import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Movieslist from "./components/Movieslist/Movieslist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";


function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar"
    );

    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  ///////////
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );

    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  /////////

  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );

      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };

  return (
    <div>
      
      <Navbar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Movieslist
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
           <Route path="/movie/:id" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
