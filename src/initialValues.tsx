import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  firstName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  lastName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  email: {
    value: '',
    error: '',
    required: true,
    validate: 'email'
  },
  typeBiens: {
    value: '',
    error: '',
    validate: 'select',
    required: true,
  },
  date: {
    value: '',
    required: true,
    error: ''
  },
  datePermisContruction: {
    value: '',
    required: true,
    error: ''
  },
  city: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  codePostal: {
    value: '',
    error: '',
    required: true,
    validate: 'number',
    minLength: 3,
    maxLength: 20
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  phone: {
    value: '',
    error: '',
    required: true,
    validate: 'phone',
    maxLength: 15
  },
  zoneBruit: {
    value: '',
    error: '',
    validate: 'select',
    required: true,
  },
  bienUsageHabitation: {
    value: '',
    error: '',
    validate: 'select',
    required: true,
  },
  bienCoPropriete: {
    value: '',
    error: '',
    validate: 'select',
    required: true,
  },
  bienAvecClim: {
    value: '',
    error: '',
    validate: 'select',
    required: true,
  },
  batAccueilPublic: {
    value: '',
    error: '',
    validate: 'select',
    required: true,
  },
  bienNonRaccordeEgout: {
    value: '',
    error: '',
    validate: 'select',
    required: true,
  },
}
