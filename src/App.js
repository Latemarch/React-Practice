import './App.css'
import './components/button.css'
import memberReducer from './reducer/memebr-reducer'
import { useReducer } from 'react'
import Button from './components/Button'

function App() {
  const initialMembers = [
    { name: 'jame kim', title: 'senior' },
    { name: 'Joe', title: 'FrontEnd' },
    { name: 'rolling', title: 'BackEnd' },
  ]
  const [members, dispatch] = useReducer(memberReducer, initialMembers)
  const handleAdded = () => {
    const name = prompt('Who is the new member?')
    dispatch({ type: 'added', name })
  }
  const handleUpdated = () => {
    const name = prompt('Name u wanna make it change')
    const newName = prompt('New name')
    dispatch({ type: 'updated', name, newName })
  }
  const handleDeleted = () => {
    const name = prompt('Who u wanna delete')
    dispatch({ type: 'deleted', name })
  }

  return (
    <>
      <h2>회사 개발자 리스트</h2>
      <ul>
        {members.map((member, i) => (
          <li key={i}>{`${member.name} (${member.title})`}</li>
        ))}
      </ul>
      <button className="btn" onClick={handleAdded}>
        Added
      </button>
      <button className="btn" onClick={handleUpdated}>
        Updated
      </button>
      <button className="btn" onClick={handleDeleted}>
        Deleted
      </button>
    </>
  )
}
export default App
