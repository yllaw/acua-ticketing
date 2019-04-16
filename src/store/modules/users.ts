import {
  getModule,
  Module,
  MutationAction,
  VuexModule,
  Mutation
} from 'vuex-module-decorators'
import store from '@/store'
import { User, UserSubmit } from '../models'
import { loginUser } from '@/services/FakeUserService'
// import { loginUser } from '../api'

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  public user: User | null = null

  @MutationAction
  public async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit)
    return { user }
  }

  @Mutation
  public logout(): void {
    this.user = null
  }

  public get username(): string | null {
    if (this.user !== null) {
      return this.user.username
    }

    return null
  }

  public get window(): number | null {
    if (this.user !== null) {
      return this.user.window
    }

    return null
  }
}

export default getModule(UsersModule)
