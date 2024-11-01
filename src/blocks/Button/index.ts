import cn from 'classnames'
import styles from './button.module.scss'
import { Block, BlockProps } from '../Block'

interface ButtonProps extends BlockProps {
  propsAndChildren: {
    label: string
    type?: 'primary' | 'link' | 'warning'
    attr?: {
      href: string
    }
    events?: {
      click: (e: HTMLButtonElement) => void
    }
  }
}

class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          ...props.propsAndChildren?.attr,
          class: cn(styles.button, styles[props.propsAndChildren?.type || 'link']),
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile('{{label}}', {
      ...this._props,
    })
  }
}

export default Button
