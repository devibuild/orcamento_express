import { Flex } from "../../Containers"
import { H1, Parag, Title2 } from "../../Text"
import Button from "../Button"
import CustomStepper from "../CustomStepper"
import { Background, StepDot, StepLine, StepperContainer, Triangle, StepDotsContainer, Label, MainTitle, ParagraphsContainer } from "./styles"


const Stepper = ({
    steps,
    title,
    pinkDisplay,
    onStart,
    parags,
    page
}) => {

    if (pinkDisplay) {
        return (
            <>
            <Background
                pink
            >
                <StepperContainer>
                    <Flex 
                        column
                        alignItems='flex-start'
                        justifyContent='space-between'
                        margin='40px 0 0 0'
                        transform='translate(120px, 50px)'
                        width='650px'
                        textAlign='left'
                        height='70%'
                    >
                        <div>
                            <Title2
                                fontSize='4rem'
                                margin='0'
                            >
                                { title }
                            </Title2>
                            { parags && (
                                <ParagraphsContainer>
                                    { parags.map((e, i) => (
                                        <Parag
                                            textColor='white'
                                            key={i}
                                        >
                                            { e }
                                        </Parag>
                                    ))}
                                </ParagraphsContainer>
                            )}
                        </div>
                        <div>
                            <Button
                                onClick={() => onStart()}
                            >
                                COMEÇAR
                            </Button>
                        </div>
                    </Flex>
                </StepperContainer>
            </Background>
            <Triangle pink />
            </>
        )
    }

    return (
        <>
        <Background>
            <StepperContainer>
                <Flex 
                    column
                    alignItems='flex-start'
                    transform='translateX(120px)'
                    width='250px'
                    textAlign='left'
                    >
                    <MainTitle>{ title.toUpperCase() }</MainTitle>
                    <CustomStepper steps={steps} page={page} />
                </Flex>
            </StepperContainer>
        </Background>
        <Triangle />
        </>
    )
        // </Flex>
}

export default Stepper