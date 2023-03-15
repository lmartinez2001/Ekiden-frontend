import { Link } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import {
  ControlledLabeledTextInput,
  ControlledSelect,
} from '../utils/FormFields'
import * as validator from '../utils/validator'
import useAxios from 'axios-hooks'
import { useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter } from '../utils/utils'

const Register = () => {
  const navigate = useNavigate()

  const [{ data, loading, error, response }, register] = useAxios(
    {
      url: '/register',
      method: 'POST',
    },
    { manual: true }
  )

  return (
    <main className='container'>
      <div className='form'>
        <h1 className='form_title'>Inscription</h1>

        <Formik
          initialValues={{
            fname: '',
            lname: '',
            gender: 'F',
            bdate: '', // birth date
            email: '',
            school: '',
            ffsu: 'n',
            tshirt: 'S',
            party: 'y',
            pwd: '',
            matchPwd: '',
            certif: null,
            expdate: '', // licence expiration date
            rulesAccepted: false,
          }}
          onSubmit={async (values) => {
            const valuesToSubmit = {
              firstname: capitalizeFirstLetter(values.fname),
              lastname: capitalizeFirstLetter(values.lname),
              pwd: values.pwd,
              birthdate: values.bdate,
              from_telecom: values.school === 'telecom',
              email: values.email.toLowerCase(),
              size: values.tshirt,
              party: values.party === 'y',
            }

            // console.log(JSON.stringify(valuesToSubmit))

            const res = await register({
              data: valuesToSubmit,
            })

            res.status === 201 && navigate('/register/success')

            // console.log('Register values:', values)
          }}
        >
          {/* {({ handleSubmit, setFieldValue }) => ( */}
          {(props) => (
            <Form>
              {/* Firstname */}
              <ControlledLabeledTextInput
                label='Prénom*'
                type='text'
                id='form_fname'
                name='fname'
                validate={validator.validateFname}
              />

              {/* Lastname */}
              <ControlledLabeledTextInput
                label='Nom*'
                type='text'
                id='form_lname'
                name='lname'
                validate={validator.validateLname}
              />

              {/* Gender */}
              <div className='form_row'>
                <legend>Genre</legend>
                <div className='form_radio'>
                  <Field
                    type='radio'
                    id='radio-gender-female'
                    name='gender'
                    value='F'
                  />
                  <label htmlFor='radio-gender-female'>Femme</label>
                </div>
                <div className='form_radio'>
                  <Field
                    type='radio'
                    id='radio-gender-male'
                    name='gender'
                    value='M'
                  />
                  <label htmlFor='radio-gender-male'>Homme</label>
                </div>
              </div>

              {/* Birth date */}
              <ControlledLabeledTextInput
                type='date'
                name='bdate'
                id='form_date'
                label='Date de naissance*'
                validate={validator.validateBirthdate}
              />

              {/* Email */}
              <ControlledLabeledTextInput
                type='email'
                label='Email*'
                name='email'
                id='form_email'
                validate={validator.validateEmail}
              />

              <ControlledSelect
                name='school'
                id='form_school'
                label='Ecole*'
                validate={validator.validateSchool}
              >
                <option value=''>Choisir</option>
                <option value='telecom'>Télécom Paris</option>
                <option value='polytechnique'>Polytechnique</option>
                <option value='hec'>HEC</option>
                <option value='agro'>Agro ParisTech</option>
                <option value='ensta'>Ensta Paris</option>
                <option value='cs'>Centrale Supelec</option>
                <option value='other'>Autre...</option>
              </ControlledSelect>

              {/* FFSU licence */}
              <div className='form_row'>
                <legend>Licencié FFSU ?</legend>
                <div className='form_radio'>
                  <Field
                    type='radio'
                    id='radio-ffsu-yes'
                    name='ffsu'
                    value='y'
                  />
                  <label htmlFor='radio-ffsu-yes'>Oui</label>
                </div>
                <div className='form_radio'>
                  <Field
                    type='radio'
                    id='radio-ffsu-no'
                    name='ffsu'
                    value='n'
                  />
                  <label htmlFor='radio-ffsu-no'>Non</label>
                </div>
              </div>

              {/* T-shirt size */}
              <div className='form_row'>
                <legend>Taille du t-shirt</legend>
                <div className='form_radio'>
                  <Field type='radio' id='radio-S' name='tshirt' value='S' />
                  <label htmlFor='radio-S'>S</label>
                </div>
                <div className='form_radio'>
                  <Field type='radio' id='radio-M' name='tshirt' value='M' />
                  <label htmlFor='radio-M'>M</label>
                </div>
                <div className='form_radio'>
                  <Field type='radio' id='radio-L' name='tshirt' value='L' />
                  <label htmlFor='radio-L'>L</label>
                </div>
              </div>

              {/* Party */}
              <div className='form_row'>
                <legend>Participation à la soirée</legend>
                <div className='form_radio'>
                  <Field
                    type='radio'
                    id='radio-party-yes'
                    name='party'
                    value='y'
                  />
                  <label htmlFor='radio-party-yes'>Oui</label>
                </div>
                <div className='form_radio'>
                  <Field
                    type='radio'
                    id='radio-party-no'
                    name='party'
                    value='n'
                  />
                  <label htmlFor='radio-party-no'>Non</label>
                </div>
              </div>

              {/* Password */}
              <ControlledLabeledTextInput
                type='password'
                id='form_pwd'
                name='pwd'
                label='Mot de passe'
                validate={validator.validatePwd}
              />

              <ControlledLabeledTextInput
                type='password'
                id='form_match-pwd'
                name='matchPwd'
                label='Confirmer le mot de passe'
                validate={() =>
                  validator.validateMatchPwd(
                    props.values.matchPwd,
                    props.values.pwd
                  )
                }
              />

              <div className='form_row'>
                <label htmlFor='form_certif'>
                  Certificat médical <strong>ou</strong> licence FFSU
                </label>
                <input
                  type='file'
                  id='form_certif'
                  accept='.pdf'
                  onChange={(e) =>
                    props.setFieldValue('certif', e.target.files[0])
                  }
                />
              </div>

              <div className='form_row'>
                <label htmlFor='form_exp_date'>
                  Date d'expiration du certificat
                </label>
                <Field type='date' id='form_exp_date' name='expdate' />
              </div>

              <div
                className={`form_row--inline ${
                  props.errors.rulesAccepted !== undefined &&
                  props.touched.rulesAccepted === true
                    ? 'error'
                    : ''
                }`}
              >
                <Field
                  type='checkbox'
                  name='rulesAccepted'
                  validate={validator.validateRules}
                />
                <p>
                  J'accepte le <Link to='#'>règlement de la course</Link>
                </p>
                <p>{props.errors.rulesAccepted}</p>
              </div>

              {error && <p>{error.response.data.message}</p>}

              {/* <button type='submit' className='form_submit'>
                S'inscrire
              </button> */}
              <button type='submit' className='button primary'>
                S'inscrire
              </button>
              <button type='submit' className='button secondary'>
                S'inscrire
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
}
export default Register
