import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  console.log(formValues)
  const { city, date, typeBiens, codePostal, agreenemt } = formValues

  const isError = useCallback(
    () =>
      Object.keys({ city, date, typeBiens, codePostal, agreenemt }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, city, date, typeBiens, codePostal, agreenemt]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label='Type du Bien'
              name='typeBiens'
              value={typeBiens.value}
              onChange={handleChange}
              error={!!typeBiens.error}
              helperText={typeBiens.error}
              required={typeBiens.required}
            >
              <option value=''> </option>
              <option value='Location'>Location</option>
              <option value='Vente'>Vente</option>
            </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Ville'
            name='city'
            placeholder='Enter your city'
            value={city.value}
            onChange={handleChange}
            error={!!city.error}
            helperText={city.error}
            required={city.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Code Postal'
            name='codePostal'
            placeholder='Entrer un Code Postal'
            value={codePostal.value}
            onChange={handleChange}
            error={!!codePostal.error}
            helperText={codePostal.error}
            required={codePostal.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label='Date de construction'
            name='date'
            type='date'
            defaultValue={date.value}
            onChange={handleChange}
            required={date.required}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt.value}
                onChange={handleChange}
                name='agreenemt'
                color='primary'
                required={agreenemt.required}
              />
            }
            label='Agree to terms and conditions'
          />
          <FormHelperText error={!!agreenemt.error}>{agreenemt.error}</FormHelperText>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Précédent
        </Button>
        <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
          Suivant
        </Button>
      </Box>
    </>
  )
}
