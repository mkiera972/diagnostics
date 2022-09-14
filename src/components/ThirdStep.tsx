import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
/* import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox' */
import { AppContext } from '../Context'

export default function ThirdStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  console.log(formValues)
  const { zoneBruit, bienUsageHabitation, bienCoPropriete, bienAvecClim, batAccueilPublic, bienNonRaccordeEgout} = formValues

  const isError = useCallback(
    () =>
      Object.keys({ zoneBruit, bienUsageHabitation, bienCoPropriete, bienAvecClim, batAccueilPublic, bienNonRaccordeEgout }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, zoneBruit, bienUsageHabitation, bienCoPropriete, bienAvecClim, batAccueilPublic, bienNonRaccordeEgout]
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
              label='Habitez-vous dans une zone de Bruit (ex aeroportuaire) ?'
              name='zoneBruit'
              value={zoneBruit.value}
              onChange={handleChange}
              error={!!zoneBruit.error}
              helperText={zoneBruit.error}
              required={zoneBruit.required}
            >
              <option value=''> </option>
              <option value='OUI'>Oui</option>
              <option value='NON'>Non</option>
            </TextField>
        </Grid>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label='Votre bien est-il occupé ?'
              name='bienUsageHabitation'
              value={bienUsageHabitation.value}
              onChange={handleChange}
              error={!!bienUsageHabitation.error}
              helperText={bienUsageHabitation.error}
              required={bienUsageHabitation.required}
            >
              <option value=''> </option>
              <option value='OUI'>Oui</option>
              <option value='NON'>Non</option>
            </TextField>
        </Grid>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label='Votre bien est-il en co-propriété ?'
              name='bienCoPropriete'
              value={bienCoPropriete.value}
              onChange={handleChange}
              error={!!bienCoPropriete.error}
              helperText={bienCoPropriete.error}
              required={bienCoPropriete.required}
            >
              <option value=''> </option>
              <option value='OUI'>Oui</option>
              <option value='NON'>Non</option>
            </TextField>
        </Grid>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label="Votre bien dispose t'il d'au moins une clim ?"
              name='bienAvecClim'
              value={bienAvecClim.value}
              onChange={handleChange}
              error={!!bienAvecClim.error}
              helperText={bienAvecClim.error}
              required={bienAvecClim.required}
            >
              <option value=''> </option>
              <option value='OUI'>Oui</option>
              <option value='NON'>Non</option>
            </TextField>
        </Grid>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label="Votre bien acceuil t'il du public ?"
              name='bienAvecClim'
              value={batAccueilPublic.value}
              onChange={handleChange}
              error={!!batAccueilPublic.error}
              helperText={batAccueilPublic.error}
              required={batAccueilPublic.required}
            >
              <option value=''> </option>
              <option value='OUI'>Oui</option>
              <option value='NON'>Non</option>
            </TextField>
        </Grid>
        <Grid item xs={12}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              select
              SelectProps={{
                native: true
              }}
              label="Votre bien est-il raccordé aux égouts ?"
              name='bienAvecClim'
              value={bienNonRaccordeEgout.value}
              onChange={handleChange}
              error={!!bienNonRaccordeEgout.error}
              helperText={bienNonRaccordeEgout.error}
              required={bienNonRaccordeEgout.required}
            >
              <option value=''> </option>
              <option value='OUI'>Oui</option>
              <option value='NON'>Non</option>
            </TextField>
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
