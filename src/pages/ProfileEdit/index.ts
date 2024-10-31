import { Block, BlockProps } from '../../blocks/Block'
import tpl from './tpl'
import styles from './profileEdit.module.scss'
import Button from '../../blocks/Button'
import ProfileSidebar from '../../blocks/BackButton'
import FormItem from '../../blocks/FormItem'
import Input from '../../blocks/Input'
import { validator } from '../../utils/validator'

interface EditingProfileFormProps extends BlockProps {
  propsAndChildren: {
    formItems: Block[]
  }
}

class EditingProfileForm extends Block {
  constructor(props: EditingProfileFormProps) {
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

class EditingProfile extends Block {
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
                  const firstName = document.querySelector('#first_name')
                  const firstNameValue = (firstName as HTMLInputElement)?.value
                  const secondName = document.querySelector('#second_name')
                  const secondNameValue = (secondName as HTMLInputElement)?.value
                  const displayName = document.querySelector('#display_name')
                  const displayNameValue = (displayName as HTMLInputElement)?.value
                  const login = document.querySelector('#login')
                  const loginValue = (login as HTMLInputElement)?.value
                  const email = document.querySelector('#email')
                  const emailValue = (email as HTMLInputElement)?.value
                  const phone = document.querySelector('#phone')
                  const phoneValue = (phone as HTMLInputElement)?.value
                  const oldPassword = document.querySelector('#oldPassword')
                  const oldPasswordValue = (oldPassword as HTMLInputElement)?.value
                  const newPassword = document.querySelector('#newPassword')
                  const newPasswordValue = (newPassword as HTMLInputElement)?.value
                  const form = document.querySelector('#editingProfile')

                  const isFirstNameValid = validator(
                    firstNameValue,
                    firstName,
                    'name',
                    'first_name',
                  )
                  const isSecondNameValid = validator(
                    secondNameValue,
                    secondName,
                    'name',
                    'second_name',
                  )
                  const isDisplayNameValid = validator(
                    displayNameValue,
                    displayName,
                    'displayName',
                    'display_name',
                  )
                  const isLoginValid = validator(loginValue, login, 'login', 'login')
                  const isEmailValid = validator(emailValue, email, 'email', 'email')
                  const isPhoneValid = validator(phoneValue, phone, 'phone', 'phone')
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

                  if (
                    isFirstNameValid &&
                    isSecondNameValid &&
                    isDisplayNameValid &&
                    isLoginValid &&
                    isEmailValid &&
                    isPhoneValid &&
                    isOldPasswordValid &&
                    isNewPasswordValid
                  ) {
                    console.log({
                      firstName: firstNameValue,
                      secondName: secondNameValue,
                      displayName: displayNameValue,
                      login: loginValue,
                      email: emailValue,
                      phone: phoneValue,
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
            },
          }),
        ],
        editingForm: new EditingProfileForm({
          propsAndChildren: {
            formItems: [
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Имя',
                  id: 'first_name',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'first_name',
                        name: 'first_name',
                        type: 'text',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          e.target && validator(value, e.target as Element, 'name', 'first_name')
                        },
                      },
                    },
                  }),
                },
              }),
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Фамилия',
                  id: 'second_name',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'second_name',
                        name: 'second_name',
                        type: 'text',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          e.target && validator(value, e.target as Element, 'name', 'second_name')
                        },
                      },
                    },
                  }),
                },
              }),
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Никнейм',
                  id: 'display_name',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'display_name',
                        name: 'display_name',
                        type: 'text',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          e.target &&
                            validator(value, e.target as Element, 'displayName', 'display_name')
                        },
                      },
                    },
                  }),
                },
              }),
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Логин',
                  id: 'login',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'login',
                        name: 'login',
                        type: 'text',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          e.target && validator(value, e.target as Element, 'login', 'login')
                        },
                      },
                    },
                  }),
                },
              }),
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Почта',
                  id: 'email',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          e.target && validator(value, e.target as Element, 'email', 'email')
                        },
                      },
                    },
                  }),
                },
              }),
              new FormItem({
                tagName: 'div',
                propsAndChildren: {
                  label: 'Телефон',
                  id: 'phone',
                  input: new Input({
                    tagName: 'input',
                    propsAndChildren: {
                      attr: {
                        id: 'phone',
                        name: 'phone',
                        type: 'text',
                      },
                      events: {
                        blur: (e) => {
                          const { value } = <HTMLInputElement>e.target
                          e.target && validator(value, e.target as Element, 'phone', 'phone')
                        },
                      },
                    },
                  }),
                },
              }),
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
        profileSidebar: new ProfileSidebar({
          propsAndChildren: { attr: { href: './chat' } },
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

const editingProfile = (): EditingProfile => new EditingProfile()

export default editingProfile
