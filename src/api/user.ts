
const mockUsers = [
  {
    username: 'user1',
    password: 'user1password'
  }
]

export const login = (username, password) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      const user = mockUers.find((u)=> u.username === username && u.password === password)
    })
  })
}
