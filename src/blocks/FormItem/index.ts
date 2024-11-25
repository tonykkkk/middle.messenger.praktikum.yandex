import { Block, BlockProps } from '../../blocks/Block'
import tpl from './tpl'
import styles from './formItem.module.scss'

interface FormItemProps extends BlockProps {
  propsAndChildren: {
    id: string
    label: string
    input: Block
  }
}

class FormItem extends Block {
  constructor(props: FormItemProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          class: styles['form-item'],
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile(tpl, this._props)
  }
}

export default FormItem
