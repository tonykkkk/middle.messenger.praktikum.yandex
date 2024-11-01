import { Pages, routes } from './routes'
import { Block } from './blocks/Block'
import { render } from './utils/render'
import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const { pathname } = document.location
  console.log(pathname)
  const module = pathname.replace('.html', '')
  let page: Block = routes['/error404']()
  if (routes?.[module as Pages]) {
    page = routes?.[module as Pages]()
  }

  render('#app', page)
})
