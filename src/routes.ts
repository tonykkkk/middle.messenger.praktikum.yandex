import main from './pages/main'
import login from './pages/login'
import registration from './pages/registration'
import profile from './pages/profile'
import profileEdit from './pages/ProfileEdit'
import error404 from './pages/error404'
import error500 from './pages/error500'
import chat from './pages/chat'
import { Block } from './blocks/Block'

export enum Pages {
  Main = '/',
  Login = '/login',
  Registration = '/registration',
  Profile = '/profile',
  EditingProfile = '/profile/edit',
  Error404 = '/error404',
  Error500 = '/error500',
  Chat = '/chat',
}

export const routes: Record<Pages, () => Block> = {
  '/': main,
  '/login': login,
  '/registration': registration,
  '/profile': profile,
  '/profile/edit': profileEdit,
  '/error404': error404,
  '/error500': error500,
  '/chat': chat,
}
