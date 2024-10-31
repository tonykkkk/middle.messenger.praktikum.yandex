import styles from './message.module.scss';
import tpl from './tpl';
import { Block, BlockProps } from '../../blocks/Block';

interface MessageProps extends BlockProps {
  propsAndChildren: {
    type: 'in' | 'out';
    text: string;
    time: string;
  };
}

class MessageItem extends Block {
  constructor(props: MessageProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          class: styles['message-item'],
        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(tpl, {
      ...this._props,
    });
  }
}

export default MessageItem;