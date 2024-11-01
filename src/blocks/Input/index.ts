import cn from 'classnames'
import { Block, BlockProps } from '../../blocks/Block'
import styles from './input.module.scss'

interface InputProps extends BlockProps {
  propsAndChildren: {
    attr: { id: string; name: string; type: string }
    events?: {
      blur: (e: Event) => void
    }
  }
}

class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          ...props.propsAndChildren.attr,
          class: cn(styles.input, 'input'),
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile('{{{Input}}}', this._props)
  }
}

export default Input
