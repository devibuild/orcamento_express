import { StepperDot, StepperLine, StepTitle } from "./styles"
import { Box, Flex } from '../../Containers'
import { useContext, useEffect } from "react"
import { ActiveIndexContext } from "../../../contexts/activeIndex"


const CustomStepper = ({ steps, page }) => {


    const {
        activeIndex,
        // 
        activeIndexRecursos,
        activeIndexLevantamento,
        activeIndexSimular,
    } = useContext(ActiveIndexContext)

    // useEffect(() => {
    //     console.log('activeIndex: ', currentPageIndex())
    // }, [currentPageIndex()])

    const currentPageIndex = () => {
        switch (page) {
            case 'levantamento':
                return activeIndexLevantamento
                break;
        
            case 'recursos':
                return activeIndexRecursos
                break;
        
            case 'simular':
                return activeIndexSimular
                break;
        
            default:
                return activeIndex
                break;
        }
    }

    return (
        <Flex
            column
            height='100%'
            alignItems='flex-start'
            justifyContent='flex-start'
        >
            { steps && steps.map((e, i) =>  i !== steps.length - 1 ? (
                // <Flex
                //     column
                //     key={e}
                //     alignItems='flex-start'
                //     justifyContent='flex-start'
                // >
                <Box key={e}>
                    <Flex
                        // alignItems='center'
                        height='8px'
                    >
                        <StepperDot
                            stepCompleted={ i < currentPageIndex() }
                            currentStep={ i === currentPageIndex() }
                            />
                        <StepTitle
                            currentStep={ i === currentPageIndex() }
                        >
                            { e.toUpperCase() }
                        </StepTitle>
                    </Flex>
                    <StepperLine />
                </Box>
                // </Flex>
            ) : (
                // <Flex
                //     column
                //     key={e}
                // >
                    <Flex
                        height='8px'
                        key={e}
                    >
                        <StepperDot
                            stepCompleted={ i < currentPageIndex() }
                            currentStep={ i === currentPageIndex() }
                        />
                        <StepTitle
                            currentStep={ i === currentPageIndex() }
                        >
                            { e.toUpperCase() }
                        </StepTitle>
                    </Flex>
                // </Flex>
            ))}
            {/* <Flex 
                column
                height='100%'
                justifyContent='flex-start'
                // margin='5px 0 0 0'
                >
                { steps && steps.map((e, i) =>  i !== steps.length - 1 ? (
                    <>
                    <StepperDot />
                    <StepperLine />
                    </>
                ) : (
                    <StepperDot />
                    ))}    

            </Flex>
            <Flex 
                column
                justifyContent='flex-start'
                alignItems='flex-start'
                height='100%'
                margin='16px 0 0 0'
            >
                { steps && steps.map((e, i) => (
                    <StepTitle key={e}>{ e.toUpperCase() }</StepTitle>
                ))}
            </Flex> */}
        </Flex>
    )
}

export default CustomStepper