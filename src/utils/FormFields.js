import { Field, useField } from 'formik'

export const ControlledLabeledTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const isError = meta.error && meta.touched

  return (
    <div className={`form_row ${isError ? 'error' : ''}`}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field {...field} {...props} />

      {isError ? <p>{meta.error}</p> : null}
    </div>
  )
}

export const ControlledSelect = ({ label, children, ...props }) => {
  const [field, meta] = useField(props)
  const isError = meta.error && meta.touched

  return (
    <div className={`form_row ${isError ? 'error' : ''}`}>
      <label htmlFor={props.id}>{label}</label>
      <Field {...field} {...props} as='select'>
        {children}
      </Field>

      {isError ? <p>{meta.error}</p> : null}
    </div>
  )
}
