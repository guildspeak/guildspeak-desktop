import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import WelcomeContainer from '../../containers/WelcomeContainer'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
  Wrapper,
  RegisterForm,
  Info,
  UsernameInput,
  EmailInput,
  PasswordInput,
  RegisterButton,
  BackButton,
  RegisterLogo
} from './styles'
import { Formik, Form, ErrorMessage } from 'formik'

const REGISTER = gql`
  mutation register($email: String!, $password: String!, $username: String!) {
    register(email: $email, password: $password, username: $username) {
      token
      user {
        username
      }
    }
  }
`

const Register = ({ history }: RouteComponentProps) => {
  const [register, { data, error }] = useMutation(REGISTER)

  const handleLogin = () => history.push('login')

  if (error) {
    if (error.toString().includes('unique')) {
      alert('This username or email is already taken!')
    } else alert('Unknown error. Check console for more details')
  }

  if (data) {
    return <WelcomeContainer data={data} />
  }

  return (
    <Wrapper>
      <RegisterForm>
        <RegisterLogo />
        <Info>Create your Guildspeak account</Info>

        <Formik
          initialValues={{ email: '', password: '', username: '' }}
          validate={values => {
            const errors = {} as typeof values
            if (!values.email || !values.username || !values.password) {
              errors.email = 'Required'
              errors.password = 'Required'
              errors.username = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              register({
                variables: {
                  email: values.email,
                  password: values.password,
                  username: values.username
                }
              })
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <EmailInput type="email" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" />
              <UsernameInput type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" />
              <PasswordInput type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />

              <RegisterButton type="submit" primary={true} disabled={isSubmitting}>
                Register
              </RegisterButton>

              <BackButton onClick={handleLogin}>I have account! Let's log in.</BackButton>
            </Form>
          )}
        </Formik>
      </RegisterForm>
    </Wrapper>
  )
}

export default withRouter(Register)
