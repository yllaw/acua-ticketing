import { User, UserSubmit } from '@/store/models'

const users: User[] = [
  {
    token: '123',
    name: 'John',
    window: 0,
    location: 'Downey'
  },
  {
    token: '321',
    name: 'Jane',
    window: 1,
    location: 'Downey'
  }
]

export function loginUser(userSubmit: UserSubmit) {
  return new Promise<User>((resolve, reject) => {
    let user: User | null = null

    users.forEach((u) => {
      if (u.name === userSubmit.name) {
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

export function setJWT(jwt: string) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve())
  })
}
