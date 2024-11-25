import { Block } from '../blocks/Block'

export const render = (query: string, component: Block): Element | null => {
  const root = document.querySelector(query)
  const content = component.getContent()

  if (root && content) {
    root.appendChild(content)
    component.dispatchComponentDidMount()
  }

  return root
}
