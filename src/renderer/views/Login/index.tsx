import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import WelcomeContainer from '../../containers/WelcomeContainer'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
  Wrapper,
  LoginForm,
  Info,
  EmailInput,
  PasswordInput,
  LoginButton,
  RegisterButton,
  LoginLogo
} from './styles'
import ErrorAlert from '../../components/ErrorAlert'
import { Formik, Form, ErrorMessage } from 'formik'
import { Center } from '../../components/shared'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`
const Login = ({ history }: RouteComponentProps) => {
  const [login, { data, error }] = useMutation(LOGIN)

  const handleRegister = () => history.push('/register')

  if (data) {
    return <WelcomeContainer data={data} />
  }

  return (
    <Wrapper>
      <LoginForm>
        <LoginLogo />
        <Info>Log in to your Guildspeak account</Info>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {} as typeof values
            if (!values.email || !values.password) {
              errors.email = 'Required'
              errors.password = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              login({ variables: { email: values.email, password: values.password } })

              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <EmailInput type="email" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" />
              <PasswordInput type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />

              <LoginButton type="submit" primary={true} disabled={isSubmitting}>
                Login
              </LoginButton>
              <RegisterButton onClick={handleRegister}>Sign Up</RegisterButton>
            </Form>
          )}
        </Formik>
      </LoginForm>
      {error && <Center>{error.message}</Center>}
    </Wrapper>
  )
}

export default withRouter(Login)
