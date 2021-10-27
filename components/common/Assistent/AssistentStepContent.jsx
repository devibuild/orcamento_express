import { useState } from 'react'
import Input from '../../common/Input'
import RadioButtonsGroup from '../Radio'
import { StepContentContainer } from './styles'

const AssistentStepContent = ({ data }) => {

    if (data && data.type === 'input' && data.inputs) {
        return (
            <StepContentContainer>
                { data.inputs.map((e, i) => (
                    <Input
                        key={i}
                        variant='outlined'
                        label={e.label}
                        value={e.value}
                        onChange={event => e.onChange(event.target.value)}
                        fullWidth
                    />
                ))}
            </StepContentContainer>
        )
    } else if (data && data.type === 'options' && data.options) {
        return (
            <StepContentContainer>
                <RadioButtonsGroup options={data.options} setValue={data.setValue} value={data.value} title={data.title} />
            </StepContentContainer>
        )
    } else if (data && data.type === 'both' && data.options && data.inputs) {
        return (
            <>
                <StepContentContainer>
                    {data.inputs.map((e, i) => (
                        <Input
                            key={i}
                            variant='outlined'
                            label={e.label}
                            value={e.value}
                            onChange={event => e.onChange(event.target.value)}
                            fullWidth
                        />
                    ))}
                </StepContentContainer>
                <StepContentContainer>
                    <RadioButtonsGroup options={data.options} setValue={data.setValue} value={data.value} title={data.title} />
                </StepContentContainer>
            </>
        )
    } else {
        return null
    }

}

export default AssistentStepContent