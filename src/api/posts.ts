export class User {
}

export const getUserPosts = (userId: number) : Promise<User[] | void>=> {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => {
      return response.json() as Promise<  User[]>
    })
    .catch((err) => {
      console.info(err)
    })

}


