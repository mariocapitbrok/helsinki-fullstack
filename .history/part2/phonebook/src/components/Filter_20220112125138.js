import React from 'react'

const handleFilterChange = (e) => {
  setNewFilter(e.target.value)
}

const Filter = ({ value }) => {
  return (
    <div>
      filter shown with
      <input onChange={handleFilterChange} value={newFilter} />
    </div>
  )
}

export default Filter
