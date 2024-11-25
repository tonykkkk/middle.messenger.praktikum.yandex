import Button from '../../blocks/Button'
import Error from '../..//blocks/Error'

const error500 = (): Error =>
  new Error({
    tagName: 'main',
    propsAndChildren: {
      errorCode: '500',
      description: 'Мы уже фиксим',
      button: new Button({
        tagName: 'a',
        propsAndChildren: {
          label: 'Назад к чатам',
          attr: {
            href: './',
          },
        },
      }),
    },
  })

export default error500
