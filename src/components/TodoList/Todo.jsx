import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import styles from './TodoList.module.css'

export default function Todo({ filter }) {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '장보기', status: 'active' },
  ])
  const handleAdd = (todo) => setTodos([...todos, todo])
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id))

  const filteredItem = getFilteredItems(todos, filter)
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredItem.map((item) => (
          <TodoList
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  )
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') return todos
  return todos.filter((todo) => todo.status === filter)
}
