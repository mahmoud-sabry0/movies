import React from 'react'
import { Row } from 'react-bootstrap'
import Cardmovie from '../Cardmovie/Cardmovie'
import PaginationComponent from '../Pagination/PaginationComponent'

export default function Movieslist({ movies, getPage, pageCount }) {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <Cardmovie key={mov.id} mov={mov} />
        })
      ) : (
        <h2 className="text-center">لا توجد افلام..</h2>
      )}

      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  )
}
