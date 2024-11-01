import { Pages, routes } from './routes'
import { Block } from './blocks/Block'
import { render } from './utils/render'
import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const { pathname } = document.location

  let page: Block = routes['/error404']()
  if (routes?.[pathname as Pages]) {
    page = routes?.[pathname as Pages]()
  }

  render('#app', page)
})
