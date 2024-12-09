import React from 'react'
import { Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
export default function Cardmovie({mov}) {
  return (
    <Col sm={6} lg={3} md={4} className='my-1' >
      <Link to={`/movie/${mov.id}`}>
      <div className='card'>
        <img src={`https://image.tmdb.org/t/p/w500/`+mov.poster_path} alt='hu' className='card__img'/>
<div className='card__overlay'>
<div className='overlay__text text-center w-100 p-2'>
  <p>اسم الفلم:{mov.original_title}</p>
  <p>تاريخ الاصدار:{mov.release_date}</p>
  <p>عدد المقيمين:{mov.vote_count}</p>
  <p>التقييم:{mov.vote_average}</p>
</div>
</div>
      </div>
      </Link>
    </Col>
  )
}
