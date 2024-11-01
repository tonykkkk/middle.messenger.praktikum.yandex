import { Block, BlockProps } from '../../blocks/Block'
import styles from './error.module.scss'
import tpl from './tpl'

interface ErrorProps extends BlockProps {
  propsAndChildren: {
    errorCode: string
    description: string
    button: Block
  }
}

class Error extends Block {
  constructor(props: ErrorProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          class: styles.error,
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile(tpl, this._props)
  }
}

export default Error
