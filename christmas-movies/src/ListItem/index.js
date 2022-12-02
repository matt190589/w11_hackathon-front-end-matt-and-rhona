import React from 'react'

function ListItem({ movie }) {
  return (
    <li><a href={movie.url}>{movie.title}</a></li>
  )
}

export default ListItem