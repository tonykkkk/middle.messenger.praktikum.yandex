import tpl from './tpl'
import { Block, BlockProps } from '../../blocks/Block'
import styles from './profileInfo.module.scss'

interface ProfileParamProps extends BlockProps {
  propsAndChildren: {
    title: string
    value: string
  }
}

class ProfileParam extends Block {
  constructor(props: ProfileParamProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          class: styles['profile-param'],
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

export default ProfileParam
