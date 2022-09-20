import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import moment from 'moment'
import { AppContext } from '../Context'


export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext)
  const { firstName, lastName, email, date, city, phone } = formValues;

  console.log(moment(new Date()).format('YYYY'));
  console.log(moment(new Date(date.value)).format('YYYY'));

  const currentYearBien = parseInt(moment(new Date(date.value)).format('YYYY'), 10);

  const yearDiff = parseInt(moment(new Date()).format('YYYY'), 10) - currentYearBien;

  console.log(yearDiff);

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {}

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value
      }
      return form
    })
    // Do whatever with the values
    console.log(form)
    // Show last component or success message
    handleNext()
  }

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary='Votre prénom' secondary={firstName.value || 'Not Provided'} />
          <ListItemText primary='Votre Nom' secondary={lastName.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Téléphone' secondary={phone.value || 'Not Provided'} />
          <ListItemText primary='Email' secondary={email.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Date de construction' secondary={moment(date.value ).format('DD/MM/YYYY') || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Ville' secondary={city.value || 'Not Provided'} />
          <ListItemText primary='Code postal' secondary={formValues.codePostal.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
          <Alert severity="error">Diagnostic à faire : </Alert>
        </Stack>

        { yearDiff > 15 ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                Diagnostic Gaz
              </Alert>
            </Stack>
            : null
        }

        { yearDiff > 15 ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                Diagnostic Electricité
              </Alert>
            </Stack>
            : null
        }

        { currentYearBien < 1949 ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                Constat de risque d&#39;exposition au plomb (CREP)
              </Alert>
            </Stack>
            : null
        }

        { (currentYearBien > 1949) && (currentYearBien < 1997) ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                Diagnostic Amiante
              </Alert>
            </Stack>
            : null
        }

        {  formValues.zoneBruit.value === "OUI" ?
          <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
            <Alert variant="filled" severity="warning">
              Plan d’exposition au bruit
            </Alert>
          </Stack>
          : null
        }

        { formValues.typeBiens.value === "Location" && formValues.bienUsageHabitation.value === "OUI" ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                Surface habitable
              </Alert>
            </Stack>
            : null
        }

        { formValues.typeBiens.value === "Vente" && formValues.bienCoPropriete.value === "OUI" ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                Attestation de Surface Privative / Loi Carrez
              </Alert>
            </Stack>
            : null
        }

        { formValues.bienAvecClim.value === "OUI" ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                DPE MARTINIQUE
              </Alert>
            </Stack>
            : null
        }

        { formValues.bienNonRaccordeEgout.value === "Vente" && formValues.bienNonRaccordeEgout.value === "OUI" ?
            <Stack sx={{ width: '100%', marginTop: '10px' }} spacing={2}>
              <Alert variant="filled" severity="warning">
                Assainissement
              </Alert>
            </Stack>
            : null
        }
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  )
}
