import tpl from './tpl'
import { Block, BlockProps } from '../../blocks/Block'
import styles from './main.module.scss'
import Button from '../../blocks/Button'

class Main extends Block {
  constructor(props: BlockProps) {
    super(props)
  }

  render(): DocumentFragment {
    return this.compile(tpl, this._props)
  }
}

const main = (): Main =>
  new Main({
    tagName: 'nav',
    propsAndChildren: {
      list: [
        new Button({
          tagName: 'a',
          propsAndChildren: {
            label: 'Авторизация',
            attr: { href: '/login' },
          },
        }),
        new Button({
          tagName: 'a',
          propsAndChildren: {
            label: 'Регистрация',
            attr: { href: '/registration' },
          },
        }),
        new Button({
          tagName: 'a',
          propsAndChildren: { label: 'Чат', attr: { href: '/chat' } },
        }),
        new Button({
          tagName: 'a',
          propsAndChildren: { label: 'Профиль', attr: { href: '/profile' } },
        }),
        new Button({
          tagName: 'a',
          propsAndChildren: {
            label: 'Редактирование профиля',
            attr: { href: '/profile/edit' },
          },
        }),
        new Button({
          tagName: 'a',
          propsAndChildren: {
            label: 'Ошибка 404',
            attr: { href: '/error404' },
          },
        }),
        new Button({
          tagName: 'a',
          propsAndChildren: {
            label: 'Ошибка 500',
            attr: { href: '/error500' },
          },
        }),
      ],
      title: 'Список страниц',
      attr: {
        class: styles.main,
      },
    },
  })

export default main
