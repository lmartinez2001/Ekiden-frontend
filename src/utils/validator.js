// Email validation
export const validateEmail = (value) => {
  let error
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!value) {
    error = 'Email requis'
  } else if (!EMAIL_REGEX.test(value)) {
    error = 'Email invalide'
  }
  return error
}

// Firstname validation
export const validateFname = (value) => {
  let error
  const NAME_REGEX = /^[a-zA-Z]{2,}$/
  if (!value) {
    error = 'Prénom requis'
  } else if (!NAME_REGEX.test(value)) {
    error = 'Au moins 2 lettres'
  }
  return error
}

// Lastname validation
export const validateLname = (value) => {
  let error
  const NAME_REGEX = /^[a-zA-Z]{2,}$/
  if (!value) {
    error = 'Nom requis'
  } else if (!NAME_REGEX.test(value)) {
    error = 'Au moins 2 lettres'
  }
  return error
}

// Password validation
export const validatePwd = (value) => {
  let error
  // Password must contain between 8 and 20 characters, at least one capital letter and one number
  const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (!value) {
    error = 'Mot de passe requis'
  } else if (!PWD_REGEX.test(value)) {
    error = 'Entre 8 et 20 caractères, au moins une majuscule et un chiffre'
  }
  return error
}

export const validateMatchPwd = (value, matchPwd) => {
  let error
  if (!value) {
    error = 'Confirmation requise'
  } else if (value !== matchPwd) {
    error = 'Les mots de passe ne correspondent pas'
  }
  return error
}

export const validateBirthdate = (value) => {
  let error
  const BIRTH_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
  if (!value) {
    error = 'Date de naissance requise'
  } else if (!BIRTH_DATE_REGEX.test(value)) {
    error = 'Date invalide'
  }
  return error
}

export const validateRules = (value) => {
  let error
  if (!value || value === false) {
    error = 'Vous devez accepter le règlement'
  }
  return error
}

export const validateSchool = (value) => {
  let error
  if (!value) {
    error = 'École requise'
  }
  return error
}
