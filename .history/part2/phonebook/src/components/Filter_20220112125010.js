import React from 'react'

const Filter = ({ onChange, value }) => {
  return (
    <div>
      filter shown with
      <input onChange={handleFilterChange} value={newFilter} />
    </div>
  )
}

export default Filter
