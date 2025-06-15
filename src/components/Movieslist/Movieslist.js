import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Cardmovie from "../Cardmovie/Cardmovie";
import PaginationComponent from "../Pagination/PaginationComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../redux/actione/movieAction";

export default function Movieslist() {
 const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);
  const dataMovie = useSelector((state) => state.movies);
  useEffect(() => {
    setMovies(dataMovie);
  }, [dataMovie]);


  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <Cardmovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center">لا توجد افلام..</h2>
      )}

      {movies.length >= 1 ? (
        <PaginationComponent />
      ) : null}
    </Row>
  );
}
