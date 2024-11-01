import Button from '../../blocks/Button'
import Error from '../..//blocks/Error'

const error404 = (): Error =>
  new Error({
    tagName: 'main',
    propsAndChildren: {
      errorCode: '404',
      description: 'Не туда попали',
      button: new Button({
        tagName: 'a',
        propsAndChildren: {
          label: 'Назад к чатам',
          attr: {
            href: '/',
          },
        },
      }),
    },
  })

export default error404
