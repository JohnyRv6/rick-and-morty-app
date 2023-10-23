import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementPage, decrementPage } from '../../store/pagination/paginationSlice'
import './Pagination.scss'

const Pagination = ({ page }) => {
  const dispatch = useDispatch()

  return (
    <div className='pagination-container'>
      <button onClick={() => dispatch(decrementPage())} disabled={page - 1 <= 0}>Prev</button>
      <span>{page && page}</span>
      <button onClick={() => dispatch(incrementPage())}>Next</button>
    </div>
  )
}

export default Pagination
