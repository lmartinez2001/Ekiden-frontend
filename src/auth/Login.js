import { Formik, Form } from 'formik'
import { ControlledLabeledTextInput } from '../utils/FormFields'
import useAxios from 'axios-hooks'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [{ error }, login] = useAxios(
    {
      url: '/login',
      method: 'POST',
      withCredentials: true,
    },
    { manual: true }
  )

  const { setAuth } = useAuth()

  return (
    <main className='container'>
      <div className='form'>
        <h3 className='form_title'>Connexion</h3>
        <Formik
          initialValues={{
            email: '',
            pwd: '',
          }}
          onSubmit={async (values) => {
            const valuesToSubmit = {
              email: values.email.toLowerCase(),
              pwd: values.pwd,
            }

            const res = await login({
              data: valuesToSubmit,
            })

            // If success
            if (res.status === 200) {
              setAuth(res.data.accessToken)
              navigate('/profile')
            }
          }}
        >
          {(props) => (
            <Form>
              <ControlledLabeledTextInput
                type='text'
                name='email'
                label='Email'
                id='form_email'
              />

              <ControlledLabeledTextInput
                type='password'
                name='pwd'
                label='Mot de passe'
                id='form_pwd'
              />

              {props.isSubmitting && <p>Connexion en cours...</p>}

              {error && (
                <p className='err-msg'>{error.response.data.message}</p>
              )}

              <button type='submit' className='button primary'>
                Connexion
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
}
export default Login
