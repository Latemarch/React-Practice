import React from 'react'

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <ul>
      {filters.map((value, idx) => (
        <li key={idx}>
          <button onClick={() => onFilterChange(value)}>{value}</button>
        </li>
      ))}
    </ul>
  )
}
