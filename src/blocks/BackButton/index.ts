import styles from './backButton.module.scss'
import { Block, BlockProps } from '../../blocks/Block'

interface ProfileSidebarProps extends BlockProps {
  propsAndChildren: {
    attr: {
      href: string
    }
  }
}

class ProfileSidebar extends Block {
  constructor(props: ProfileSidebarProps) {
    super({
      ...props,
      tagName: 'a',
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          ...props.propsAndChildren.attr,
          class: styles['profile-sidebar'],
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile('{{href}}', {
      ...this._props,
    })
  }
}

export default ProfileSidebar
