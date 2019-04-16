import { User, UserSubmit } from '@/store/models'

const users: User[] = [
  {
    id: 1,
    username: 'John',
    window: 0,
    location: 'Downey'
  },
  {
    id: 2,
    username: 'Jane',
    window: 1,
    location: 'Downey'
  }
]

export function loginUser(userSubmit: UserSubmit) {
  return new Promise<User>((resolve, reject) => {
    let user: User | null = null

    users.forEach((u) => {
      if (u.username === userSubmit.username) {
        user = u
      }
    })

    setTimeout(() => {
      if (user !== null) {
        resolve(user)
      } else {
        reject(new Error('user not found'))
      }
    }, 10)
  })
}
