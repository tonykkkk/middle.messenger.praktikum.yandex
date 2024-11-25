import { Block, BlockProps } from '../../blocks/Block'
import styles from './search.module.scss'

interface SearchProps extends BlockProps {
  propsAndChildren: {
    attr: {
      placeholder: string
    }
  }
}

class Search extends Block {
  constructor(props: SearchProps) {
    super({
      ...props,
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          ...props.propsAndChildren.attr,
          class: styles.search,
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile('{{search}}', {
      ...this._props,
    })
  }
}

export default Search
