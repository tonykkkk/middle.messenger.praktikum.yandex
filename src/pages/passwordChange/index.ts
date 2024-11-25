import { Block, BlockProps } from '../../blocks/Block'
import tpl from './tpl'
import styles from './passwordChange.module.scss'
import Button from '../../blocks/Button'
import BackButton from '../../blocks/BackButton'
import FormItem from '../../blocks/FormItem'
import Input from '../../blocks/Input'
import { validator } from '../../utils/validator'

interface PasswordChangeFormProps extends BlockProps {
  propsAndChildren: {
    formItems: Block[]
  }
}

class PasswordChangeForm extends Block {
  constructor(props: PasswordChangeFormProps) {
    super({
      ...props,
      tagName: 'form',
      propsAndChildren: {
        ...props.propsAndChildren,
        attr: {
          class: styles['editing-profile-form'],
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile('{{{formItems}}}', this._props)
  }
}

class PasswordChange extends Block {
  constructor() {
    super({
      tagName: 'main',
      propsAndChildren: {
        username: 'Иван',
        buttons: [
          new Button({
            tagName: 'a',
            propsAndChildren: {
              label: 'Сохранить',
              type: 'primary',
              events: {
                click: () => {
                  const oldPassword = document.querySelector('#oldPassword')
                  const oldPasswordValue = (oldPassword as HTMLInputElement)?.value
                  const newPassword = document.querySelector('#newPassword')
                  const newPasswordValue = (newPassword as HTMLInputElement)?.value
                  const form = document.querySelector('#editingProfile')

                  const isOldPasswordValid = validator(
                    oldPasswordValue,
                    oldPassword,
                    'password',
                    'oldPassword',
                  )
                  const isNewPasswordValid = validator(
                    newPasswordValue,
                    newPassword,
                    'password',
                    'newPassword',
                  )

                  if (isOldPasswordValid && isNewPasswordValid) {
                    console.log({
                      oldPassword: oldPasswordValue,
                      newPassword: newPasswordValue,
                    })
                  } else {
                    form?.classList.add('error')
                  }
                },
              },
            },
          }),
          new Button({
            tagName: 'a',
            propsAndChildren: {
              label: 'Отмена',
              attr: { href: '/profile' },
            },
          }),
        ],
        editingForm: new PasswordChangeForm({
          propsAndChildren: {
            formItems: [
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Старый пароль',
                  id: 'oldPassword',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'oldPassword',
                        name: 'oldPassword',
                        type: 'password',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          validator(value, e.target as Element, 'password', 'oldPassword')
                        },
                      },
                    },
                  }),
                },
              }),
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Новый пароль',
                  id: 'newPassword',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'newPassword',
                        name: 'newPassword',
                        type: 'password',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          validator(value, e.target as Element, 'password', 'newPassword')
                        },
                      },
                    },
                  }),
                },
              }),
            ],
          },
        }),
        profileSidebar: new BackButton({
          propsAndChildren: { attr: { href: '/profile' } },
        }),
        attr: {
          class: styles['editing-profile'],
        },
      },
    })
  }

  render(): DocumentFragment {
    return this.compile(tpl, this._props)
  }
}

const passwordChange = (): PasswordChange => new PasswordChange()

export default passwordChange
