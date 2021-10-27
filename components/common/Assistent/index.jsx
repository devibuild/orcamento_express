import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { H2, Parag } from '../../Text';
import CustomButton from '../Button'
import AssistentStep from './Step';
import AssistentStepContent from './AssistentStepContent';

const CustomStepper = withStyles({
    root: {
        background: 'inherit',
    }
})(Stepper);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

// function getSteps() {
//   return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
// }

function getSteps() {
    return [
        'Área Total',
        'Estilo Arquitetônico',
        'Qtde. Pavimentos',
        // 'Paredes Externas',
        // 'Tipo Telha',
        // 'Garagem',
        // 'Sala Estar-TV',
        // 'Escritório',
        // 'Quartos',
        // 'Despensa',
        // 'Banheiros',
        // 'Cozinha',
        // 'Área Gourmet',
        // 'Lavabos',
        // 'Área de Serviço',
        // 'Int. Hid./Ele.',
        // 'Conforto',
        // 'Acabamentos'
    ];
}


export default function VerticalLinearStepper({ data }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <CustomStepper activeStep={activeStep} orientation="vertical"> 
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
                <H2 fontSize='1.6rem' fontWeight='700'>
                    {label}
                </H2>
            </StepLabel>
            <StepContent>
              <AssistentStep>
                {/* <AssistentStepContent data={data[index]} /> */}
                <div className={classes.actionsContainer}>
                  <div>
                  { activeStep === 0 ? null : (
                    <CustomButton
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Anterior
                    </CustomButton>
                  )}
                    <CustomButton
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                    </CustomButton>
                  </div>
                </div>
              </AssistentStep>
            </StepContent>
          </Step>
        ))}
      </CustomStepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <CustomButton onClick={handleReset} className={classes.button}>
            Reset
          </CustomButton>
        </Paper>
      )}
    </div>
  );
}
































// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import { Check } from 'phosphor-react';
// import StepConnector from '@material-ui/core/StepConnector';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Parag } from '../Text';

// const CustomStepper = withStyles({
//     root: {
//         background: 'inherit',
//     }
// })(Stepper);


// const QontoConnector = withStyles({
//     alternativeLabel: {
//         top: 10,
//         left: 'calc(-50% + 16px)',
//         right: 'calc(50% + 16px)',
//     },
//     active: {
//         '& $line': {
//             borderColor: '#5e03c5',
//         },
//     },
//     completed: {
//         '& $line': {
//             borderColor: '#5e03c5',
//         },
//     },
//     line: {
//         borderColor: '#7e8aa4',
//         borderTopWidth: 3,
//         borderRadius: 1,
//     },
// })(StepConnector);

// const useQontoStepIconStyles = makeStyles({
//     root: {
//         color: '#7e8aa4',
//         display: 'flex',
//         height: 22,
//         alignItems: 'center',
//     },
//     active: {
//         color: '#5e03c5',
//     },
//     circle: {
//         width: 8,
//         height: 8,
//         borderRadius: '50%',
//         backgroundColor: 'currentColor',
//     },
//     completed: {
//         color: '#5e03c5',
//         zIndex: 1,
//         fontSize: 18,
//     },
// });

// function QontoStepIcon(props) {
//     const classes = useQontoStepIconStyles();
//     const { active, completed } = props;

//     return (
//         <div
//             className={clsx(classes.root, {
//                 [classes.active]: active,
//             })}
//         >
//             {completed ? <Check size={24} weight="bold" className={classes.completed} /> : <div className={classes.circle} />}
//         </div>
//     );
// }

// QontoStepIcon.propTypes = {
//     /**
//      * Whether this step is active.
//      */
//     active: PropTypes.bool,
//     /**
//      * Mark the step as completed. Is passed to child components.
//      */
//     completed: PropTypes.bool,
// };



// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         background: 'inherit',
//     },
//     button: {
//         marginRight: theme.spacing(1),
//     },
//     instructions: {
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1),
//     },
// }));

// function getSteps() {
//     return [
//         'Área Total',
//         'Estilo Arquitetônico',
//         'Qtde. Pavimentos',
//         'Paredes Externas',
//         'Tipo Telha',
//         'Garagem',
//         'Sala Estar-TV',
//         'Escritório',
//         'Quartos',
//         'Despensa',
//         'Banheiros',
//         'Cozinha',
//         'Área Gourmet',
//         'Lavabos',
//         'Área de Serviço',
//         'Int. Hid./Ele.',
//         'Conforto',
//         'Acabamentos'
//     ];
// }

// function getStepContent(step) {
//     switch (step) {
//         case 0:
//             return 'Select campaign settings...';
//         case 1:
//             return 'What is an ad group anyways?';
//         case 2:
//             return 'This is the bit I really care about!';
//         default:
//             return 'Unknown step';
//     }
// }

// export default function CustomizedSteppers() {
//     const classes = useStyles();
//     const [activeStep, setActiveStep] = React.useState(1);
//     const steps = getSteps();

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//     };

//     return (
//         <div className={classes.root}>
//             <CustomStepper orientation='vertical' alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
//                 {steps.map((label, index) => (
//                     <Step key={label}>
//                         <StepLabel StepIconComponent={QontoStepIcon}>
//                             {activeStep !== index ? null : (
//                                 <Parag>
//                                     {label}
//                                 </Parag>
//                             )}
//                         </StepLabel>
//                     </Step>
//                 ))}
//             </CustomStepper>
//             <div>
//                 {activeStep === steps.length ? (
//                     <div>
//                         <Parag className={classes.instructions}>
//                             All steps completed - you&apos;re finished
//             </Parag>
//                         <Button onClick={handleReset} className={classes.button}>
//                             Reset
//             </CustomButton>
//                     </div>
//                 ) : (
//                     <div>
//                         <Parag className={classes.instructions}>{getStepContent(activeStep)}</Parag>
//                         <div>
//                             <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
//                                 Back
//               </CustomButton>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 onClick={handleNext}
//                                 className={classes.button}
//                             >
//                                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                             </CustomButton>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }