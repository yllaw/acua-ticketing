import {
  getModule,
  Module,
  MutationAction,
  VuexModule
} from 'vuex-module-decorators'
import store from '@/store'
import { User, UserSubmit } from '../models'
// import { fetchProfile, fetchUser, loginUser, updateUser, setJWT } from '../api'

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  public user: User | null = null

  // @MutationAction
  // async login(userSubmit: UserSubmit) {
  //   const user = await loginUser(userSubmit)
  //   setJWT(user.token)
  //   return { user }
  // }
}

export default getModule(UsersModule)
