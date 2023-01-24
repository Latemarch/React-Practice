import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function TodoList({ todo, onUpdate, onDelete }) {
  const { text, status } = todo
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active'
    onUpdate({ ...todo, status: status })
  }
  const handleDelete = () => onDelete(todo)

  return (
    <li>
      <input
        type="checkbox"
        id="checkbos"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  )
}
