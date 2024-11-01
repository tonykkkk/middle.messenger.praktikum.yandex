import styles from './chatCard.module.scss'
import tpl from './tpl'
import { Block, BlockProps } from '../../blocks/Block'

interface ChatCardProps extends BlockProps {
  propsAndChildren: {
    icon: string
    name: string
    text: string
    date: string
    count: string
  }
}

class ChatItem extends Block {
  constructor(props: ChatCardProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          class: styles['chat-item'],
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

export default ChatItem
