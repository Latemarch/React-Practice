import './App.css'
import './components/button.css'
// import memberReducer from './reducer/memebr-reducer'
import { useReducer } from 'react'
import { useImmer } from 'use-immer'

function App() {
  const initialMembers = [
    { name: 'jame kim', title: 'senior' },
    { name: 'Joe', title: 'FrontEnd' },
    { name: 'rolling', title: 'BackEnd' },
  ]
  const [members, updateMember] = useImmer(initialMembers)
  const handleAdded = () => {
    const name = prompt('Who is the new member?')
    updateMember((m) => {
      m.push({ name, title: 'New' })
    })
  }
  const handleUpdated = () => {
    const name = prompt('Name u wanna make it change')
    const newName = prompt('New name')
    updateMember((members) => {
      const member = members.find((m) => m.name === name)
      member.name = newName
    })
  }
  const handleDeleted = () => {
    const name = prompt('Who u wanna delete')
    updateMember((members) => {
      const idx = members.findIndex((m) => m.name === name)
      console.log(idx)
      idx === -1 || members.splice(idx, 1)
    })
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
