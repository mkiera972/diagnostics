import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import Confirm from './Confirm'
import Success from './Success'
import { AppContext } from '../Context'

// Step titles
const labels = ['Informations personnelles', 'Biens', 'Informations Complémentaires', 'Confirmation']
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep />
    case 1:
      return <SecondStep />
    case 2:
      return <ThirdStep />
    case 3:
      return <Confirm />
    default:
      throw new Error('Unknown step')
  }
}

const StepForm = () => {
  const { activeStep } = useContext(AppContext)

  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Box sx={{ my: 5 }}>
            <Typography variant='h4' align='center'>
              La maison des Experts
            </Typography>
            <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
              Remplissez le formulaire afin d&#39;obtenir un diagnostic de votre bien.
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
      )}
    </>
  )
}

export default StepForm
