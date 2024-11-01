import { Pages, routs } from './routs'
import { Block } from './blocks/Block'
import { render } from './utils/render'
import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const { pathname } = document.location

  const page: Block = routs?.[pathname as Pages]()

  render('#app', page)
})
