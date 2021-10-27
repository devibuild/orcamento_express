import { Parag } from "../../Text"
import { Flex } from "../../Containers"
import { FinishingPatternContainer, StandardBox } from "./styles"
import RadioButtons from "../RadioButtons"
import { useEffect, useState } from "react"
import { Circle, List, SketchLogo } from "phosphor-react"

const FinishingPattern = ({
    pattern,
    setPattern,
    confort,
    setConfort,
    small,
}) => {

    const patterns = [
        {
            label: 'economy',
            color: 'pink',
            icon: <List size={18} style={{ margin: '1px 5px 0 0'}} />
        },
        {
            label: 'standard',
            color: 'purple',
            icon: <Circle size={18} style={{ margin: '1px 5px 0 0'}} />
        },
        {
            label: 'premium',
            color: 'darkPurple',
            icon: <SketchLogo size={18} style={{ margin: '1px 5px 0 0'}} />
        },
    ]

    return (
        <FinishingPatternContainer>
            <Parag margin='0'>
                Escolha o padrão do acabamento:
            </Parag>
            <Flex
                width='100%'
                margin='5px 0 0 0'
            >
                { patterns.map((e, i) => (
                    <StandardBox
                        key={`${e.label}_finishing_pattern`}
                        color={e.color}
                        active={pattern === e.label}
                        onClick={() => setPattern(e.label)}
                        small={small}
                    >
                        <Flex
                            // fontSize={small ? '0.5rem' : undefined}
                        >
                            { small ? null : e.icon }
                            { e.label.toUpperCase() }
                        </Flex>
                    </StandardBox>
                ))}
            </Flex>
            <Flex
                width='100%'
                justifyContent='space-between'
                textAlign='left'
            >
                <Parag
                    width='100%'
                >
                    Quer melhorar o conforto temoacústico?
                </Parag>
                <RadioButtons
                    key='want_thermoacoustic_confort'
                    row
                    options={[
                        {
                            value: 'sim',
                            label: 'SIM'
                        },
                        {
                            value: 'nao',
                            label: 'NÃO'
                        },
                    ]}
                
                    select={confort}
                    onChange={e => setConfort(e)}
                />
            </Flex>
        </FinishingPatternContainer>
    )
}

export default FinishingPattern