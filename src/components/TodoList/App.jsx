import { useState } from 'react'
import Todo from './Todo'
import Header from './Header'

const filters = ['all', 'active', 'completed']
export default function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todo filter={filter} />
    </>
  )
}
