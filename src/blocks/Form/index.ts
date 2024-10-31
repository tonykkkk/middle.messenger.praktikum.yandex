import tpl from './tpl'
import { Block, BlockProps } from '../../blocks/Block'
import styles from './form.module.scss'

interface FormProps extends BlockProps {
  propsAndChildren: {
    title: string
    fields: Block[]
    buttons?: Block[]
    id?: string
    attr?: {
      class?: string
    }
  }
}

class Form extends Block {
  constructor(props: FormProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          ...props.propsAndChildren?.attr,
          class: styles.form,
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile(tpl, {
      ...this._props,
    })
  }
}

export default Form
