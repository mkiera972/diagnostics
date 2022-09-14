import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../Context'

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext)
  const { firstName, lastName, email, phone } = formValues

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email, phone }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, firstName, lastName, email, phone]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Prénom'
            name='firstName'
            placeholder='Votre Prénom'
            value={firstName.value}
            onChange={handleChange}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Nom'
            name='lastName'
            placeholder='Votre nom'
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Email'
            name='email'
            placeholder='Votre email'
            type='email'
            value={email.value}
            onChange={handleChange}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Téléphone'
            placeholder='Votre téléphone'
            name='phone'
            value={phone.value}
            onChange={handleChange}
            error={!!phone.error}
            helperText={phone.error}
            required={phone.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Suivant
        </Button>
      </Box>
    </>
  )
}
