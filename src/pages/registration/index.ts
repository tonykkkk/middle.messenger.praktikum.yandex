import Button from '../../blocks/Button'
import Form from '../../blocks/Form'
import FormItem from '../../blocks/FormItem'
import Input from '../../blocks/Input'
import { validator } from '../../utils/validator'

const registration = (): Form =>
  new Form({
    tagName: 'main',
    propsAndChildren: {
      title: 'Регистрация',
      id: 'registration',
      fields: [
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
                  type: 'phone',
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
            label: 'Пароль',
            id: 'password',
            input: new Input({
              tagName: 'input',
              propsAndChildren: {
                attr: {
                  id: 'password',
                  name: 'password',
                  type: 'password',
                },
                events: {
                  blur: (e) => {
                    const { value } = <HTMLInputElement>e.target
                    validator(value, e.target as Element, 'password', 'password')
                  },
                },
              },
            }),
          },
        }),
      ],
      buttons: [
        new Button({
          tagName: 'a',
          propsAndChildren: {
            label: 'Зарегистрироваться',
            type: 'primary',
            events: {
              click: () => {
                const firstName = document.querySelector('#first_name')
                const firstNameValue = (firstName as HTMLInputElement)?.value
                const secondName = document.querySelector('#second_name')
                const secondNameValue = (secondName as HTMLInputElement)?.value
                const login = document.querySelector('#login')
                const loginValue = (login as HTMLInputElement)?.value
                const email = document.querySelector('#email')
                const emailValue = (email as HTMLInputElement)?.value
                const phone = document.querySelector('#phone')
                const phoneValue = (phone as HTMLInputElement)?.value
                const password = document.querySelector('#password')
                const passwordValue = (password as HTMLInputElement)?.value
                const form = document.querySelector('#registration')

                const isFirstNameValid = validator(firstNameValue, firstName, 'name', 'first_name')
                const isSecondNameValid = validator(
                  secondNameValue,
                  secondName,
                  'name',
                  'second_name',
                )
                const isLoginValid = validator(loginValue, login, 'login', 'login')
                const isEmailValid = validator(emailValue, email, 'email', 'email')
                const isPhoneValid = validator(phoneValue, phone, 'phone', 'phone')
                const isPasswordValid = validator(passwordValue, password, 'password', 'password')

                if (
                  isFirstNameValid &&
                  isSecondNameValid &&
                  isLoginValid &&
                  isEmailValid &&
                  isPhoneValid &&
                  isPasswordValid
                ) {
                  console.log({
                    firstName: firstNameValue,
                    secondName: secondNameValue,
                    login: loginValue,
                    email: emailValue,
                    phone: phoneValue,
                    password: passwordValue,
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
            label: 'Войти',
            attr: {
              href: './login',
            },
          },
        }),
      ],
    },
  })

export default registration
