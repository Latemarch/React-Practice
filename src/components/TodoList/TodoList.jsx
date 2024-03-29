import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import styles from './TodoList2.module.css'

export default function TodoList({ todo, onUpdate, onDelete }) {
  const { text, status } = todo
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active'
    onUpdate({ ...todo, status: status })
  }
  const handleDelete = () => onDelete(todo)

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbos"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>

      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  )
}
