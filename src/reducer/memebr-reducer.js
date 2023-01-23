export default function memberReducer(members, action) {
  switch (action.type) {
    case 'added': {
      return [...members, { name: action.name, title: 'new' }]
    }
    case 'updated': {
      return members.map((member) => {
        if (member.name === action.name) {
          return { ...member, name: action.newName }
        } else return member
      })
    }
    case 'deleted': {
      return members.filter((m) => m.name !== action.name)
    }
  }
}
